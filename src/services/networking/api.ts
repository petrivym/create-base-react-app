import axios, { AxiosInstance, isAxiosError } from "axios";

export const userApi: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 5000,
});

export const makeRequest = async <T, R = any>(
  method: string,
  api: AxiosInstance,
  url: string,
  data?: R
): Promise<T | undefined> => {
  try {
    const response = await api<T>({ url, method, data });

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError<{ error?: { message: string } }>(error)) {
      throw error;
    }

    throw new Error("An unknown error");
  }
};
