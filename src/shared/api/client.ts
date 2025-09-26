import { BACKEND_BASE_URL } from "../config";

export const client = {
  async get<ReturnType>(
    endpoint: string,
    errorMessage: string,
  ): Promise<ReturnType> {
    const response = await fetch(`${BACKEND_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    return response.json();
  },
  async post<ReturnType, BodyType>(
    endpoint: string,
    body: BodyType,
    errorMessage: string,
    options?: RequestInit,
  ): Promise<ReturnType> {
    const response = await fetch(`${BACKEND_BASE_URL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    return response.json();
  },
};
