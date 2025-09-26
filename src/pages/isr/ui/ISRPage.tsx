import Link from "next/link";
import { getPosts } from "@/shared/api";

export const revalidate = 10;

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts Page</h1>
      <p>
        After 10 seconds from the first request, a new request will trigger the
        page regeneration process and only subsequent requests will receive the
        new page (with the new post, if one has been added to the database).
      </p>
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
