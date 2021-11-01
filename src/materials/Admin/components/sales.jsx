import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  BooleanField,
  UrlField,
} from "react-admin";

export const SalesList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Название Акции" />
      <BooleanField source="active" label="Активная Акция" />
      <UrlField label="Link" source="url" />
      <ImageField label="Картинка" src="image" source="image" />
      <EditButton />
    </Datagrid>
  </List>
);
