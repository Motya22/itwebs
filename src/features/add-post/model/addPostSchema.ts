import { z } from "zod";

export const addPostFormSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 4 characters.",
  }),
  body: z
    .string()
    .min(10, {
      message: "Body must be at least 10 characters.",
    })
    .max(50, {
      message: "Body must not be longer than 50 characters.",
    }),
  picture: z.instanceof(File).refine((file) => file.size > 0, {
    message: "File is required.",
  }),
});

export type AddPostFormValues = z.infer<typeof addPostFormSchema>;
