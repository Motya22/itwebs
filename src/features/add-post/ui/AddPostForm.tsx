"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { addPost } from "@/shared/api";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/shared/ui";
import type { AddPostFormValues } from "../model/addPostSchema";
import { addPostFormSchema } from "../model/addPostSchema";

export default function AddPostForm({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const form = useForm<AddPostFormValues>({
    resolver: zodResolver(addPostFormSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  async function onSubmit(data: AddPostFormValues) {
    try {
      const newPostData = await addPost({
        title: data.title,
        body: data.body,
        userId: 1,
      });
      onCloseModal();
      toast.success("Post has been created", {
        description: (
          <pre className="mt-2 w-[300px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">
              {JSON.stringify(newPostData, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unknown error occurred");
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title of new post" {...field} />
              </FormControl>
              <FormDescription>This is your title of new post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter description of new post"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your body of new post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Picture</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    field.onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Post</Button>
      </form>
    </Form>
  );
}
