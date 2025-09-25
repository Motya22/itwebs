import type { Post } from "../../model";

export const getPost = async (id: string): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    throw new Error("Unable to get post");
  }

  return response.json();
};
