import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  Edit,
} from "react-admin";

export const GroupList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Название группы" />
      <TextField aria-multiline source="group_text" label="Текст Группы" />
      <ImageField label="Картинка" src="imageUrl" source="imageUrl" />
      <EditButton />
    </Datagrid>
  </List>
);
export const GroupCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название группы" />
      <TextInput multiline source="group_text" label="Текст Группы" />
      <ImageInput
        source="Image"
        label="Group Image"
        accept="image/*"
        multiple="false"
      >
        <ImageField source="imageUrl" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
export const GroupEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название группы" />
      <TextInput multiline source="group_text" label="Текст Группы" />
      <ImageField source="image_url" title="title" />
      <ImageInput
        source="Image"
        label="Group Image"
        accept="image/*"
        multiple="false"
      >
        <ImageField source="imageUrl" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
