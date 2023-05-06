import { LikeButton } from "./LikeButton";
import Link from "next/link";
import styles from "../../../styles/ListOfPosts.module.css";

export async function ListOfPosts() {
  const posts = await fetchPost();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 className={styles.title}>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ));
}

function fetchPost() {
  return fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
}
