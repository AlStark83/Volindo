"use client";
import { useState } from "react";

export default function Page() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const postNote = async () => {
		// Your Django backend API URL for creating a note
		const apiUrl = "http://127.0.0.1:8000/notes/api/notes/";

		try {
			const response = await fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Include any additional headers, e.g., authentication headers
				},
				body: JSON.stringify({
					title: title,
					description: description,
				}),
			});

			if (response.ok) {
				alert("Note created successfully");
				setTitle("");
				setDescription("");
				// You can handle success here, e.g., redirect to another page or update state
			} else {
				console.error("Failed to create note");
			}
		} catch (error) {
			console.error("Error creating note:", error);
		}
	};

	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<form>
					<label>Title :</label>
					<input
						className="text-neutral-950 text-center h-fit inline-flex"
						name="title"
						type="text"
						value={title}
						placeholder="max length 100 chars"
						onChange={(event) => setTitle(event.target.value)}
					/>
					<br />
					<label>Description :</label>
					<textarea
						className="text-neutral-950 text-center h-fit inline-flex"
						name="description"
						placeholder="max length 1000 chars"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
					<br />
					<button onClick={postNote}>Post Note</button>
				</form>
			</main>
		</>
	);
}
