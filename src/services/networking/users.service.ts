import { ROUTES } from "../../constants";
import { GetUserResponse, User } from "../../types";
import { makeRequest, userApi } from "./api";

export const getUsers = () => makeRequest<GetUserResponse, string>("GET", userApi, ROUTES.users);
export const getUser = (id: string) => makeRequest<User, string>("GET", userApi, ROUTES.user(id));
export const getUsersByParam = (param: string, value: string) =>
  makeRequest<GetUserResponse, string>("GET", userApi, ROUTES.filerByParam(param, value));
