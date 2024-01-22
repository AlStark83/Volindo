import { Note } from "@/interfaces/Notes";

interface Props {
	notes: Note[];
}

export default function Notes({ notes }: Props) {
	console.log("desde notes.tsx");
	return <div>{notes.length === 0 ? <h1>No Notes</h1> : <h1> NOTES </h1>}</div>;
}

export const getServerSideProps = async () => {
	const res = await fetch("http://127.0.0.1:8000/notes/api/notes/");
	const notes = await res.json();
	return { props: { notes: notes } }; // will be passed to the page component as
};
