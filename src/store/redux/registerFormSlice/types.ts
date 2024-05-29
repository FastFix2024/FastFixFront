
  export interface UsersSliceState {
    users: NewUserData[]
  }
  
  export interface NewUserData {
    id: string;
    username: string;
    email: string;
    password: string;
    passwordRetype: string;
    agreement?: boolean;
  }