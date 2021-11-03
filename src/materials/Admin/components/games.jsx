import * as React from "react";
import { List, Datagrid, TextField, ImageField, EditButton, ReferenceField } from "react-admin";

export const GamesList = (props) => (
  <List {...props}>
    <Datagrid>
      {/* <TextField source="title" label="Название группы" /> */}
      <ReferenceField reference="groups" source="groupId" label="Game"/>
      {/* <ImageField label="Картинка" src="imageUrl" source="imageUrl" /> */}
      <EditButton />
    </Datagrid>
  </List>
);
