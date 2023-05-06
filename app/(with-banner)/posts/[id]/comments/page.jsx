import ListOfComments from "./components/ListOfComments";

export default async function Comments({ params }) {
  const { id } = params;
  return <ListOfComments id={id} />;
}
