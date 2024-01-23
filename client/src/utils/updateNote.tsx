"use client";
import { useState } from "react";

export default function UpdateNote() {
	// State to store input values
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	// Function to handle form submission for both creating and updating notes
	const handleNoteSubmission = async () => {
		// Determine the API endpoint on your Django backend for creating or updating a note
		const apiUrl = "http://localhost:8000/notes/api/notes";

		try {
			// Determine the HTTP method based on whether there is an ID in the URI (PUT for update, POST for create)
			const method = "PUT";

			// If it's an update, extract the ID from the URI
			const noteId = window.location.pathname.split("/").pop();

			// Send the request to the backend
			const response = await fetch(apiUrl + (noteId ? `/${noteId}/` : ""), {
				method: method,
				headers: {
					"Content-Type": "application/json",
					// You might need to include additional headers, such as authentication headers
				},
				body: JSON.stringify({
					title: title,
					description: description,
				}),
			});

			// Check if the request was successful (status code 2xx)
			if (response.ok) {
				alert("Note updated successfully");
				// You can handle success here, e.g., redirect to another page or update state
			} else {
				// Handle errors (non-2xx status codes)
				console.error("Failed to create/update note");
			}
		} catch (error) {
			// Handle network errors or other exceptions
			console.error("Error creating/updating note:", error);
		}
	};
	const handleDeleteNote = async () => {
		// Determine the API endpoint on your Django backend for deleting a note
		const apiUrl = "http://localhost:8000/notes/api/notes";

		try {
			// Extract the ID from the URI
			const noteId = window.location.pathname.split("/").pop();

			// Send the DELETE request to the backend
			const response = await fetch(apiUrl + (noteId ? `/${noteId}/` : ""), {
				method: "DELETE",
				headers: {
					// You might need to include additional headers, such as authentication headers
				},
			});

			// Check if the request was successful (status code 2xx)
			if (response.ok) {
			alert("Note deleted successfully");
				// You can handle success here, e.g., redirect to another page or update state
			} else {
				// Handle errors (non-2xx status codes)
				console.error("Failed to delete note");
			}
		} catch (error) {
			// Handle network errors or other exceptions
			console.error("Error deleting note:", error);
		}
	};

	// JSX for your component with a form
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<form>
				<label>Title:</label>
				<br />
				<input
					className="text-neutral-950 text-center h-fit inline-flex"
					type="text"
					value={title}
					placeholder="max length 100 chars"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<br />
				<label>Description:</label>
				<br />
				<textarea
					className="text-neutral-950 text-center h-fit inline-flex"
					placeholder="max length 1000 chars"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<br />
				<button type="button" onClick={handleNoteSubmission}>
					Update Note
				</button>
				<br />
				<br />
        <button type="button" onClick={handleDeleteNote}>
				Delete Note
				</button>
			</form>
		</main>
	);
}
