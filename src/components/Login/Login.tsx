import * as Yup from "yup";
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import { useFormik } from 'formik'
import { useAppDispatch } from 'store/hooks'
import { authSliceActions } from 'store/redux/authSlice/authSlice'
import { LoginContent, LoginForm, ButtonsContainer, ButtonWrapper } from './styles'
import { LOGIN_FORM_NAMES, LoginFormValues } from './types'

const schema = Yup.object().shape({
  [LOGIN_FORM_NAMES.EMAIL]: Yup.string().required("email required").email("Invalid email format"),
  [LOGIN_FORM_NAMES.PASSWORD]: Yup.string()
    .required("password required")
    .min(8, "Password must be at least 8 characters")
    });

const Login = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      dispatch(authSliceActions.login(values))
      },
  });

  return (
    <LoginContent>
      <LoginForm onSubmit={formik.handleSubmit}>
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

        <div>Forgot your password feature is not active yet</div>
        
        <ButtonsContainer>
          <ButtonWrapper>
            <Button name="SUBMIT" type="submit" />
          </ButtonWrapper>    
        </ButtonsContainer>
      </LoginForm>
    </LoginContent>
  );
};

export default Login;