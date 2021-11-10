import { Admin, Resource } from "react-admin";
import { GroupCreate, GroupEdit, GroupList } from "./components/groups";
import dashboard from "./dashboard";
import dataProvider from "./dataProvider";
import { SliderCreate, SliderEdit, SliderList } from "./components/slider";
import { NewsCreate, NewsEdit, NewsList } from "./components/news";
import { SalesCreate, SalesEdit, SalesList } from "./components/sales";
import { GamesList } from "./components/games";
import authProvider from "./authProvider";

const AdminPanel = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={dashboard}
      authProvider={authProvider}
    >
      <Resource
        name="groups"
        list={GroupList}
        edit={GroupEdit}
      />
      <Resource
        name="slider"
        list={SliderList}
        create={SliderCreate}
        edit={SliderEdit}
      />
      <Resource
        name="news"
        list={NewsList}
        create={NewsCreate}
        edit={NewsEdit}
      />
      <Resource
        name="sales"
        list={SalesList}
        create={SalesCreate}
        edit={SalesEdit}
      />
      {/* <Resource name="games" list={GamesList} /> */}

      {/* <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      /> */}
    </Admin>
  );
};

export default AdminPanel;
