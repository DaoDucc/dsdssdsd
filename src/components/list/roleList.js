import * as React from "react";
import {
  TextField,
  BooleanField,
  List,
  Datagrid,
  EditButton,
  DeleteButton,
} from "react-admin";


const roleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="uuid" />
      <TextField source="name" />
      <TextField source="description" />
      <BooleanField source="default" />
      <EditButton/>
      <DeleteButton />
    </Datagrid>
  </List>
);
export default roleList;