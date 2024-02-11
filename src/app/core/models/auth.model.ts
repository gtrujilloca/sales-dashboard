export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginError {
  message: string;
  statusCode: number;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked?: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IUserResponse {
  jwt: string;
  user: IUser;
}