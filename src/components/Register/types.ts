export interface RegisterFormValues {
    username: string;
    email: string;
    password: string;
    passwordRetype: string;
    agreement?: boolean;
  }
  export enum REGISTER_FORM_NAMES {
    USERNAME = 'username',
    EMAIL = 'email',
    PASSWORD = 'password',
    PASSWORD_RETYPE = 'passwordRetype',
    AGREEMENT = 'agreement',
  }
  