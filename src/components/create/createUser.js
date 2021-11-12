import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceArrayInput,
  BooleanInput,
  SelectArrayInput,
  SelectInput,
} from "ra-ui-materialui";
import {
  email,
  choices,
  minLength,
  maxLength,
  required
} from "react-admin";
const transform = data => {
  const formateDate = data.birthDate.replaceAll('-','');
  return ({
    ...data,
    birthDate: formateDate
  })
};
const validateEmail = email();
const validateGender = choices(['M', 'F', 'O'], 'Please choose one of the values');
const validateFullName = [required(), minLength(2), maxLength(15)];
const createUser = (props) => {
  return (
    <Create {...props} transform={transform}>
      <SimpleForm >
        <TextInput source="address"  />
        <DateInput source="birthDate" />
        <TextInput source="email" validate={validateEmail}/>
        <TextInput source="fullName" validate={validateFullName}/>
        <TextInput source="username" validate={validateFullName}/>
        <TextInput source="password" validate={validateFullName}/>
        <TextInput source="title"/>
        <SelectInput source="departmentID" label="department" choices={[
          {id: 1, name:'Phòng IT'}
        ]} />
        <SelectInput
          source="gender"
          choices={[
            { id: "M", name: "Male" },
            { id: "F", name: "Female" },
            { id: "O", name: "Other" }
          ]} validate={validateGender}/>
        <TextInput source="phone" id="phone" />
        <ReferenceArrayInput source="roleIDs" reference="role" label="roles">
          <SelectArrayInput optionText="id" />
        </ReferenceArrayInput>
        <BooleanInput source="enabled"  />
      </SimpleForm>
    </Create>
  );
};

export default createUser;

