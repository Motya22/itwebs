import { getPosts } from "@/shared/api";

export default async function SSR() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
