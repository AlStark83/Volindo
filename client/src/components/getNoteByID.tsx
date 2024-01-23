async function getData({ params }: { params: { id: string } }) {
  let id:string = params.id
	const res = await fetch(`http://127.0.0.1:8000/notes/api/notes/${id}`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  
	const data = await getData({params});
	return (
		<main>
			{
				// <ul>
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
					
							<a
								key={data.id}
								href={`https://localhost:3000/notes/${data.id}`}
								className="rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
								// target="_blank"
								// rel="noopener noreferrer"
							>
								<h2 className={`mb-3 text-2xl font-semibold w-full`}>
									♦ {data.title}{" "}
									{/* <span className="text-red-800 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               X
            </span> */}
								</h2>
								<p className={`m-0 text-sm opacity-50 w-full`}>
									{data.description}
								</p>
							</a>
						
					
				</div>
			}
		</main>
	);
}
