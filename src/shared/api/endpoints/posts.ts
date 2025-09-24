import type { Post } from "../../model";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Unable to get posts");
  }

  return response.json();
};
