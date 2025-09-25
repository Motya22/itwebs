import { BACKEND_BASE_URL } from "../config";

export const client = {
  async get<T>(endpoint: string, errorMessage: string): Promise<T> {
    const response = await fetch(`${BACKEND_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    return response.json();
  },
};
