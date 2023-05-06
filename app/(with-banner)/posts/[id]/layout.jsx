import Link from "next/link";
function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
}
export default async function Post({ params, children }) {
  const { id } = params;
  const post = await fetchPost(id);
  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Show Comments</Link>
      {children}
    </section>
  );
}
