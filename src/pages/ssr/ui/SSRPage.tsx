import Link from "next/link";
import { AddPostModal } from "@/features/add-post";
import { getPosts } from "@/shared/api";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts Page</h1>
      <AddPostModal />
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
