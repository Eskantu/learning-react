import React from "react";
import { useTask } from "../../Hooks/useTask";
import { useSEO } from "../../Hooks/useSEOI";

export function TodoList() {
	// llamamos al hook useSEO con el título y la descripción
	useSEO(
		"To do list",
		"This is a simple todo list with a form to add new tasks a temp list of tasks to do. Use the useState hook to manage the state of the form and the list of tasks. Tailwindcss is used for the styles."
	);
	// importamos el hook useTask
	const { tasks, addTask, deleteTask } = useTask();

	const andleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// evitamos que el formulario recargue la página
		event.preventDefault();
		// obtenemos el formulario
		const { elements } = event.currentTarget;
		// nos aseguramos de que el input no es null
		const input = elements.namedItem("txtTask");
		// comprobamos que el input es un input
		const isInput = input instanceof HTMLInputElement; //esto es javaScript
		// si no es un input o es null no hacemos nada
		if (!isInput || input == null) return;

		// llamamos a la función addTask con el valor del input
		addTask(input.value);
		// limpiamos el input
		input.value = "";
	};

	return (
		<>
			<h1 className=" font-mono text-center text-gray-700 dark:text-white">
				1.- To do list
			</h1>
			<p className="text-sm text-gray-500 truncate dark:text-gray-400">
				This is a simple todo list with a form to add new tasks a temp list of
				tasks to do.
				<br /> Use the useState hook to manage the state of the form and the
				list of tasks. <br />
				Tailwindcss is used for the styles.
			</p>
			<hr className="mt-5"></hr>
			<main className="flex gap-4 flex-row mt-10">
				<form
					aria-label="add task to list"
					className="max-w-sm mx-auto"
					onSubmit={andleSubmit}>
					<div className="mb-5">
						<label
							htmlFor="txtTask"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Add new task
						</label>
						<input
							type="text"
							id="txtTask"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder=""
							required
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Submit
					</button>
				</form>
				<aside>
					<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
						<div className="flex items-center justify-between mb-4">
							<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
								To do List
							</h5>
							<a
								href="#"
								className="text-sm ms-4 font-medium text-blue-600 hover:underline dark:text-blue-500">
								View all
							</a>
						</div>
						<div className="flow-root">
							{
								// si no hay tareas mostramos un mensaje
								tasks.length === 0 && (
									<p className="text-sm text-gray-500 dark:text-gray-400">
										No tasks to show
									</p>
								)
							}
							<ul
								role="list"
								className="divide-y divide-gray-200 dark:divide-gray-700">
								{tasks.map((task, _) => {
									return (
										<li className="py-3 sm:py-4" key={task.id}>
											<div className="flex items-center">
												<div className="flex-shrink-0">
													<img
														className="w-8 h-8 rounded-full"
														src="https://wac-cdn.atlassian.com/es/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1450"
													/>
												</div>
												<div className="flex-1 min-w-0 ms-4">
													<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
														{task.task}
													</p>
													<p className=" text-sm text-gray-500 truncate dark:text-gray-400">
														{task.id}
													</p>
												</div>
												<div className="ms-5">
													<button
														name="btnDelete"
														type="button"
														onClick={() => deleteTask(task.id)}
														className="text-sm font-medium text-red-600 hover:underline dark:text-red-500">
														Delete
													</button>
												</div>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</aside>
			</main>
		</>
	);
}
