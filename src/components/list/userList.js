import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  ArrayField,
  EditButton,
  DeleteButton,
  ChipField,
  SingleFieldList
} from "react-admin";

const userList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fullName" />
      <TextField source="phone" />
      <TextField source="gender" />
      <EmailField source="email"  />
      <TextField source="address" />
      
      <DateField source="birthDate"  />
      <ArrayField source="roles">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export default userList;