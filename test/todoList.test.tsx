import { describe, test, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { TodoList } from "../src/Pages/TodoList";

describe("<TodoList />", () => {
	// test('should work', async () =>
	// {
	//   render(<App />)
	//   screen.debug()
	//   expect(
	//   screen.getByText('1.- To do list')).toBeDefined()
	// })

	test("should add task and remove them", async () => {
		// crear user para simular user
		const user = userEvent.setup();
		// renderizar componente
		render(<TodoList />);
		// obtener input
		const input = screen.getByRole("textbox");
		expect(input).toBeDefined();

		//buscar el formulario
		const form = screen.getByRole("form");
		expect(form).toBeDefined();

		const button = form.querySelector("button");
		expect(button).toBeDefined();

		const taskText = crypto.randomUUID();

		await user.type(input, taskText);
		await user.click(button);

		const list = screen.getByRole("list");
		expect(list).toBeDefined();

		expect(list.childNodes.length).toBe(1);

		const taskFind = screen.getByText(taskText);
		expect(taskFind).toBeDefined();

		const removeButton = screen.getByText("Delete");
		expect(removeButton).toBeDefined();
		await user.click(removeButton);
    expect(list.childNodes.length).toBe(0);

    const noResult = screen.getByText('No tasks to show')
    expect(noResult).toBeDefined()
	});
});
