import { Task } from "../Interfaces/Task";
import { useState } from "react";

export const useTask = () => {
	// creamos un estado para guardar las tareas
	const [tasks, setTask] = useState<Task[]>([]);

	const addTask = (task: string) => {
		// añadimos la tarea al array de tareas
		const newTask: Task = {
			id: crypto.randomUUID(),
			task: task,
			timespan: Date.now(),
		};
		setTask((oldArray) => [...oldArray, newTask]);
	};

	const deleteTask = (id: string) => {
		setTask((oldArray) => oldArray.filter((task, _) => task.id !== id));
	};

	return {
		tasks,
		addTask,
		deleteTask,
	};
};
