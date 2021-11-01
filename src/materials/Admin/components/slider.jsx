import * as React from "react";
import {
  Create,
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  BooleanField,
  UrlField,
  SimpleForm,
  TextInput,
  ImageInput,
  BooleanInput,
} from "react-admin";

export const SliderList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title_high" label="Название банера сверху" />
      <TextField source="title_low" label="Название банера снизу" />
      <TextField source="button_text" label="Название кнопки" />
      <BooleanField source="active" label="Активный баннер" />
      <BooleanField source="active_title" label="Активный текст" />
      <BooleanField source="active_button" label="Активная кнопка" />
      <UrlField label="Link To" source="url_to" />
      <ImageField label="Картинка" src="image" source="image" />
      <ImageField label="Картинка моб" src="image" source="image_mob" />
      <EditButton />
    </Datagrid>
  </List>
);

export const SliderCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title_high" label="Название банера сверху" />
      <TextInput source="title_low" label="Название банера снизу" />
      <TextInput source="button_text" label="Название кнопки" />
      <BooleanInput source="active" label="Активный баннер" />
      <BooleanInput source="active_title" label="Активный текст" />
      <BooleanInput source="active_button" label="Активная кнопка" />
      <TextInput label="Link To" source="url_to" />
      <ImageInput source="image_desc" accept="image/*" multiple="false">
        <ImageField label="Картинка" src="image" source="image" title="title" />
      </ImageInput>
      <ImageInput source="image_mob" accept="image/*" multiple="false">
        <ImageField label="Картинка моб" src="image" source="image_mob" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
