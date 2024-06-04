import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../Input/Input";
import { ButtonContainer, Checkbox, CheckboxContainer, CheckboxLabel, RegisterContent, RegisterForm } from "./styles";
import { REGISTER_FORM_NAMES, RegisterFormValues } from "./types";
import Button from "../Button/Button";
import { useAppDispatch } from "../../store/hooks";
import { authSliceActions } from '../../store/redux/authSlice/authSlice'


const schema = Yup.object().shape({
  [REGISTER_FORM_NAMES.USERNAME]: Yup.string()
    .required("Userame required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters"),
  [REGISTER_FORM_NAMES.EMAIL]: Yup.string()
    .required("email required")
    .email("Invalid email format"),
  [REGISTER_FORM_NAMES.PASSWORD]: Yup.string()
    .required("password required")
    .min(8, "Password must be at least 8 characters")
    .max(15, "Must be not longer than 15 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number")
  ,
  [REGISTER_FORM_NAMES.PASSWORD_RETYPE]: Yup.string().oneOf([Yup.ref(REGISTER_FORM_NAMES.PASSWORD)], 'Passwords dont match') .required("password required"),
});

const Register = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      [REGISTER_FORM_NAMES.USERNAME]: "",
      [REGISTER_FORM_NAMES.EMAIL]: "",
      [REGISTER_FORM_NAMES.PASSWORD]: "",
      // [REGISTER_FORM_NAMES.PASSWORD_RETYPE]: "",
      [REGISTER_FORM_NAMES.HAS_AGREED]: false,
    } as RegisterFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values: RegisterFormValues) => {
      dispatch(authSliceActions.register({
        username: values.username,
        email: values.email,
        password: values.password
      
      }));
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
          // value={formik.values.passwordRetype}
          // error={formik.errors.passwordRetype}
        />
        <ButtonContainer>
          <Button name="SUBMIT" type="submit" disabled={!formik.values.hasAgreed} />
          <CheckboxContainer>
            <Checkbox
              id="agreement-id"
              name={REGISTER_FORM_NAMES.HAS_AGREED}
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values[REGISTER_FORM_NAMES.HAS_AGREED]}
            />
            <CheckboxLabel htmlFor="agreement-id">I Agree</CheckboxLabel>
          </CheckboxContainer>
        </ButtonContainer>
      </RegisterForm>
    </RegisterContent>
  );
};

export default Register;
