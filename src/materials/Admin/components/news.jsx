import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  BooleanField,
  UrlField,
  TextInput,
  BooleanInput,
  ImageInput,
  SimpleForm,
  Create,
} from "react-admin";

export const NewsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Название новости" />
      <BooleanField source="active" label="Активная Новость" />
      <UrlField label="Link" source="url" />
      <ImageField label="Картинка" src="image" source="image" />
      <EditButton />
    </Datagrid>
  </List>
);

export const NewsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название новости" />
      <BooleanInput source="active" label="Активная Новость" />
      <TextInput label="Link" source="url" />
      <ImageInput source="Image" accept="image/*" multiple="false">
        <ImageField label="Картинка" src="image" source="image" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
