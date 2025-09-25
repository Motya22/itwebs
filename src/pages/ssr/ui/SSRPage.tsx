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
            Post Title / Link:{" "}
            <Link
              href={`/ssr/${post.id}`}
              className="transition-colors hover:text-primary/50"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
