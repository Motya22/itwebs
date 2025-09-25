import type { Post } from "../../model";
import { client } from "../client";

export const getPost = async (id: string) => {
  return client.get<Post>(`/posts/${id}`, "Unable to get post");
};
