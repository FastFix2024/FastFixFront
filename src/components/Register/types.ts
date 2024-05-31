export interface RegisterFormValues {
  id: string;
  username: string;
  email: string;
  password: string;
  // passwordRetype: string;
  hasAgreed?: boolean;
}
export enum REGISTER_FORM_NAMES {
  USERNAME = "username",
  EMAIL = "email",
  PASSWORD = "password",
  PASSWORD_RETYPE = "passwordRetype",
  HAS_AGREED = "hasAgreed",
}
