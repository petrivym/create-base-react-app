import { GetUserResponse } from "../../types";
import { makeRequest, userApi } from "./api";

export const getUser = () => makeRequest<GetUserResponse>("GET", userApi, "/User");
