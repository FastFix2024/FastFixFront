export interface AuthState {
  user?: User;
  registrationErrorMessage?: string
}

export interface RegistrationDto {
  username: string;
  email: string;
  password: string;
}
  
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;

}
