import { getPost, getPosts } from "@/shared/api";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <>
      <h1>SSG Page During Build</h1>
      <h2>Post Title: {post.title}</h2>
      <p>Post Body: {post.body}</p>
    </>
  );
}
