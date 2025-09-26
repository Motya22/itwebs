import type { AddPost, Post } from "../../model";
import { client } from "../client";

export const getPost = async (id: string) => {
  return client.get<Post>(`/posts/${id}`, "Unable to get post");
};

export const addPost = async (post: AddPost) => {
  return client.post<Post, AddPost>("/posts", post, "Unable to add post");
};
