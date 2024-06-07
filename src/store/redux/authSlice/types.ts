export interface AuthState {
  user?: User;
  isAuthenticated: boolean;
  registrationErrorMessage?: string
}

export interface RegistrationDto {
  username: string;
  email: string;
  password: string;
}
export interface LoginDto {
  email: string;
  password: string;
}
  
  
export interface User {
  id: number;
  username: string;
  email: string;
 

}

