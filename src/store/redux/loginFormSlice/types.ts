export interface ExistingUsersSliceState {
    users: ExistingUserData[];
  }
  
  export interface ExistingUserData {
    email: string;
    password: string;
  }
  