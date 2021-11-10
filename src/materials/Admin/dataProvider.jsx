import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "https://api.gigabyte-shop.com/gigabyte/api/v1";
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    // const query = {
    //   sort: JSON.stringify([field, order]),
    //   range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //   filter: JSON.stringify(params.filter),
    // };
    const url = `${apiUrl}/${resource}`;

    console.log(url);
    console.log(resource);
    return httpClient(url).then(({ headers, json }) => {
      console.log(json);
      return {
        data: json[resource],
        total: json[resource].length,
      };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
      console.log(json);
      return {
        data: json,
      };
    }),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  update: async (resource, params) => {
    if (params.data.Image || params.data.ImageBanner) {
      let newPictures = [];
      if (params.data.Image) {
        params.data.Image = [params.data.Image];
        let tempPicture = params.data.Image.filter(
          (p) => p.rawFile instanceof File
        );
        newPictures.push(...tempPicture);
      }
      if (params.data.ImageBanner) {
        params.data.ImageBanner = [params.data.ImageBanner];
        let tempPicture = params.data.ImageBanner.filter(
          (p) => p.rawFile instanceof File
        );
        newPictures.push(...tempPicture);
      }
      //   const formerPictures = params.data.imageUrl.filter(
      //     (p) => !(p.rawFile instanceof File)
      //   );
      let titles = [];
      if (params.data.Image) {
        titles.push({ title: params.data.Image[0].title, type: "imageUrl" });
      }
      if (params.data.ImageBanner) {
        titles.push({
          title: params.data.ImageBanner[0].title,
          type: "imageUrlBanner",
        });
      }
      const dataToCreate = params.data;
      if (params.data.Image) delete dataToCreate["Image"];
      if (params.data.ImageBanner) delete dataToCreate["ImageBanner"];
      return Promise.all(newPictures.map(convertFileToBase64))
        .then((base64Pictures) =>
          base64Pictures.map((picture64) => {
            return {
              src: picture64,
              title: `${titles[base64Pictures.indexOf(picture64)].title}`,
              type: `${titles[base64Pictures.indexOf(picture64)].type}`,
            };
          })
        )
        .then((transformedNewPictures) => {
          const auth = JSON.parse(localStorage.getItem("auth"));
          let putBody = dataToCreate;
          transformedNewPictures.forEach((pictureObj) => {
            putBody[pictureObj.type] = pictureObj;
          });
          return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: "PUT",
            headers: new Headers({
              Authorization: `Bearer ${auth}`,
              Accept: "application/json",
            }),
            body: JSON.stringify(putBody),
          }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
          }));
        });
    } else if (params.data.Image_desc || params.data.Image_mob) {
      console.log(params.data.image_desc);
      params.data.Image_desc = [params.data.Image_desc];
      params.data.Image_mob = [params.data.Image_mob];
      const newPicturesDesc = params.data.Image_desc.filter(
        (p) => p.rawFile instanceof File
      );
      const newPicturesMob = params.data.Image_mob.filter(
        (p) => p.rawFile instanceof File
      );
      //   const formerPictures = params.data.imageUrl.filter(
      //     (p) => !(p.rawFile instanceof File)
      //   );
      const titles_desc = params.data.Image_desc.map((obj) => obj.title);
      const titles_mob = params.data.Image_mob.map((obj) => obj.title);

      const dataToCreate = params.data;
      delete dataToCreate["Image_desc"];
      delete dataToCreate["Image_mob"];
      const transformedNewPictureDesc = await Promise.all(
        newPicturesDesc.map(convertFileToBase64)
      ).then((base64Pictures) =>
        base64Pictures.map((picture64) => {
          return {
            src: picture64,
            title: `${titles_desc[base64Pictures.indexOf(picture64)]}`,
          };
        })
      );
      const transformedNewPictureMob = await Promise.all(
        newPicturesMob.map(convertFileToBase64)
      ).then((base64Pictures) =>
        base64Pictures.map((picture64) => {
          return {
            src: picture64,
            title: `${titles_mob[base64Pictures.indexOf(picture64)]}`,
          };
        })
      );
      return httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: "PUT",
        headers: new Headers({
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
          Accept: "application/json",
        }),
        body: JSON.stringify({
          ...dataToCreate,
          imageUrlDesc: transformedNewPictureDesc[0],
          imageUrlMob: transformedNewPictureMob[0],
        }),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    } else {
      return httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(params.data),
        headers: new Headers({
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
          Accept: "application/json",
        }),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: async (resource, params) => {
    // console.log(params);
    if (params.data.Image) {
      const newPictures = params.data.Image.filter(
        (p) => p.rawFile instanceof File
      );
      //   const formerPictures = params.data.imageUrl.filter(
      //     (p) => !(p.rawFile instanceof File)
      //   );
      const titles = params.data.Image.map((obj) => obj.title);
      const dataToCreate = params.data;
      delete dataToCreate["Image"];
      return Promise.all(newPictures.map(convertFileToBase64))
        .then((base64Pictures) =>
          base64Pictures.map((picture64) => {
            return {
              src: picture64,
              title: `${titles[base64Pictures.indexOf(picture64)]}`,
            };
          })
        )
        .then((transformedNewPictures) => {
          console.log("Base64");
          console.log(transformedNewPictures);
          const auth = JSON.parse(localStorage.getItem("auth"));
          return httpClient(`${apiUrl}/${resource}`, {
            method: "POST",
            headers: new Headers({
              Authorization: `Bearer ${auth}`,
              Accept: "application/json",
            }),
            body: JSON.stringify({
              ...dataToCreate,
              imageUrl: transformedNewPictures[0],
            }),
          }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
          }));
        });
    } else if (params.data.image_desc && params.data.image_mob) {
      console.log(params.data.image_desc);
      const newPicturesDesc = params.data.image_desc.filter(
        (p) => p.rawFile instanceof File
      );
      const newPicturesMob = params.data.image_mob.filter(
        (p) => p.rawFile instanceof File
      );
      //   const formerPictures = params.data.imageUrl.filter(
      //     (p) => !(p.rawFile instanceof File)
      //   );
      const titles_desc = params.data.image_desc.map((obj) => obj.title);
      const titles_mob = params.data.image_mob.map((obj) => obj.title);

      const dataToCreate = params.data;
      delete dataToCreate["image_desc"];
      delete dataToCreate["image_mob"];
      const transformedNewPictureDesc = await Promise.all(
        newPicturesDesc.map(convertFileToBase64)
      ).then((base64Pictures) =>
        base64Pictures.map((picture64) => {
          return {
            src: picture64,
            title: `${titles_desc[base64Pictures.indexOf(picture64)]}`,
          };
        })
      );
      const transformedNewPictureMob = await Promise.all(
        newPicturesMob.map(convertFileToBase64)
      ).then((base64Pictures) =>
        base64Pictures.map((picture64) => {
          return {
            src: picture64,
            title: `${titles_mob[base64Pictures.indexOf(picture64)]}`,
          };
        })
      );
      return httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify({
          ...dataToCreate,
          imageUrlDesc: transformedNewPictureDesc[0],
          imageUrlMob: transformedNewPictureMob[0],
        }),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    } else {
      return httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        Accept: "application/json",
      }),
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};

const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });
