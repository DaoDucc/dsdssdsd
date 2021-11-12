import { 
  Edit,SimpleForm,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  ArrayInput,
  BooleanInput, } from "ra-ui-materialui";

const editUser = (props) => (
  <Edit title="edit users" {...props}>
    <SimpleForm>
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput source="fullName" />
      <TextInput label="password" source="password" />
      <SelectInput 
        source="gender"
        choices={[
          { id: "M", name: "Male" },
          { id: "F", name: "Female" },
          { id: "O",name :"Other"}
        ]}
      />
      <TextInput source="birthDate" />
      <TextInput source="address" />
      <TextInput source="username" />
      <BooleanInput source="enabled" />
    </SimpleForm>
  </Edit>
);
export default editUser;
