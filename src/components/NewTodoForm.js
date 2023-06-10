import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState("");

    const handleChange = (evt) => {
        setTask(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = { id: uuidv4(), task, completed: false };
        createTodo(newTodo);
        setTask("");
    };

    return (
        <form className="mt-8 flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="task" className="w-full mb-2 text-lg">
                New todo
            </label>
            <div className="flex flex-row">
                <input
                    value={task}
                    onChange={handleChange}
                    id="task"
                    type="text"
                    name="task"
                    placeholder="New Todo"
                    className="flex-grow w-full text-black bg-gray-200 px-4 py-2 rounded-md text-lg focus:outline-black"
                />
                <button
                    type="submit"
                    className="ml-2 px-6 py-2 bg-white text-green-500 uppercase font-semibold rounded-md border border-transparent hover:bg-green-600 focus:outline-none"
                >
                    Add Todo
                </button>
            </div>
        </form>
    );
}

export default NewTodoForm;