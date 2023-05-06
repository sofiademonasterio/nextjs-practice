import Image from "next/image";

function fetchComments(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
}
export default async function ListOfComments(params) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} style={{ background: "gray" }}>
          <Image
            width="50"
            height="50"
            alt={comment.name}
            src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${comment.name}`}
          />
          <h5>{comment.name}</h5>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
