import { AxiosError } from "axios";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface BaseState {
  token: string | null;
}

export interface ReduxState {
  base: BaseState;
}

export interface APIResponse<T> {
  data: T;
  message: string;
}

export type AxiosCustomError = AxiosError<{ message: string }>;
