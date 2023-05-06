function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
}
export default async function FetchPost(params) {
  const { id } = params;
  const post = await fetchPost(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
