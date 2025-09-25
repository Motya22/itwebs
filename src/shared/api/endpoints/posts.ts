import type { Post } from "../../model";
import { client } from "../client";

export const getPosts = async () => {
  return client.get<Post[]>("/posts", "Unable to get posts");
};
