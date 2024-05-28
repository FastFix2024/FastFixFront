import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";

import { ButtonContainer, Checkbox, CheckboxContainer, CheckboxLabel, RegisterContent, RegisterForm } from "./styles";
import { REGISTER_FORM_NAMES, RegisterFormValues } from "./types";
import Button from "../Button/Button";

const schema = Yup.object().shape({
  [REGISTER_FORM_NAMES.USERNAME]: Yup.string().required("name required"),
  [REGISTER_FORM_NAMES.EMAIL]: Yup.string().required("email required"),
  [REGISTER_FORM_NAMES.PASSWORD]: Yup.string().required("password required"),
  [REGISTER_FORM_NAMES.PASSWORD_RETYPE]: Yup.string().required("password required"),
});

const Register = ({ children }: any) => {
  const formik = useFormik({
    initialValues: {
      [REGISTER_FORM_NAMES.USERNAME]: "",
      [REGISTER_FORM_NAMES.EMAIL]: "",
      [REGISTER_FORM_NAMES.PASSWORD]: "",
      [REGISTER_FORM_NAMES.PASSWORD_RETYPE]: "",
      [REGISTER_FORM_NAMES.AGREEMENT]: false,
    } as RegisterFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: RegisterFormValues) => {
      console.table(values);
    },
  });

  return (
    <RegisterContent>
      <RegisterForm onSubmit={formik.handleSubmit}>
        <Input
          name="username"
          type="text"
          label="Benutzername"
          placeholder="BENUTZERNAME"
          onInputChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username}
        />
        <Input
          name="email"
          type="email"
          placeholder="EMAIL"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="KENNWORT"
          label="Kennwort"
          onInputChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />
        <Input
          name="passwordRetype"
          type="password"
          placeholder="KENNWORT WIEDERHOLEN"
          label="Kennwort wiederholen"
          onInputChange={formik.handleChange}
          value={formik.values.passwordRetype}
          error={formik.errors.passwordRetype}
        />
        <ButtonContainer>
          <Button name="SUBMIT" type="submit" disabled={!formik.values.agreement} />
          <CheckboxContainer>
            <Checkbox
              id="agreement-id"
              name={REGISTER_FORM_NAMES.AGREEMENT}
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values[REGISTER_FORM_NAMES.AGREEMENT]}
            />
            <CheckboxLabel htmlFor="agreement-id">I Agree</CheckboxLabel>
          </CheckboxContainer>
        </ButtonContainer>
      </RegisterForm>
    </RegisterContent>
  );
};

export default Register;
