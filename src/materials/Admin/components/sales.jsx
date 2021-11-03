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
  Edit,
  DeleteButton,
} from "react-admin";

export const SalesList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Название Акции" />
      <BooleanField source="active" label="Активная Акция" />
      <UrlField label="Link" source="url" />
      <ImageField label="Картинка" src="image" source="image" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const SalesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput required multiline source="title" label="Название Акции" />
      <BooleanInput source="active" label="Активная Акция" />
      <TextInput label="Link" source="url" />
      <ImageInput
        isRequired={true}
        source="Image"
        accept="image/*"
        multiple="false"
      >
        <ImageField label="Картинка" src="image" source="image" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
export const SalesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput required multiline source="title" label="Название Акции" />
      <BooleanInput source="active" label="Активная Акция" />
      <TextInput label="Link" source="url" />
      <ImageField
        label="Текущая картинкаКартинка"
        src="image"
        source="image"
        title="title"
      />
      <ImageInput
        // isRequired={true}
        source="Image"
        accept="image/*"
        multiple={false}
      >
        <ImageField label="Картинка" src="image" source="image" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
