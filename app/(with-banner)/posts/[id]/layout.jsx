import FetchPost from "./components/FetchPost";
import Link from "next/link";

export default async function LayoutPosts({ params, children }) {
  const { id } = params;
  return (
    <section>
      <FetchPost id={id} />
      <Link href={`/posts/${id}/comments`}>Show Comments</Link>
      {children}
    </section>
  );
}
