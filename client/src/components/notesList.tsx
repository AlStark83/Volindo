async function getData() {
	const res = await fetch("http://127.0.0.1:8000/notes/api/notes/");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function Page() {
	const data = await getData();

	return (
		<main>
			{
				// <ul>
				<div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
					{data.map(
						(item: { id: string; title: string; description: string }) => (

							<a
								key={item.id}
								href={`http://localhost:3000/notes/${item.id}`}
								className="rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
								// target="_blank"
								// rel="noopener noreferrer"
							>
								<h2 className={`mb-3 text-2xl font-semibold w-full`}>
									♦ {item.title}{" "}
									{/* <span className="text-red-800 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               X
            </span> */}
								</h2>
								<p className={`m-0 text-sm opacity-50 w-full`}>
									{item.description}
								</p>
							</a>
						)
					)}
				</div>
			}
		</main>
	);
}
