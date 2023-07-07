import axios, { AxiosInstance, AxiosResponse } from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

export const userApi: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 5000,
});

export const makeRequest = async <T>(
  method: string,
  baseURL: AxiosInstance,
  url: string,
  data?: any
): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await baseURL({ url, method, data });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }

    console.log("An unexpected error occurred");
  }
};
