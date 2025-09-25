import Link from "next/link";
import { getPosts } from "@/shared/api";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/ssr/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
