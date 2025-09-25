import { BACKEND_BASE_URL } from "../config";

export const client = {
  async get<T>(endpoint: string, errorMessage: string): Promise<T> {
    const response = await fetch(`${BACKEND_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    return response.json();
  },
  async post(
    endpoint: string,
    body: any,
    errorMessage: string,
    options?: RequestInit,
  ) {
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
