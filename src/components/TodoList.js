import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            task: "task 1",
            completed: false,
            subTask: {
                id: uuidv4(),
                task: "task 3",
                completed: false,
                show: false // Add the "show" property for subtask
            }
        },
        {
            id: uuidv4(),
            task: "task 2",
            completed: true,
            subTask: {
                id: uuidv4(),
                task: "task 4",
                completed: false,
                show: false // Add the "show" property for subtask
            }
        }
    ]);


    const create = newTodo => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    };

    const remove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const update = (id, updatedTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const todosList = todos.map(todo => (
        <Todo
            toggleComplete={toggleComplete}
            update={update}
            remove={remove}
            key={todo.id}
            todo={todo}
        />
    ));

    return (
        <div className="bg-green-500 text-white mx-auto p-8 max-w-md">
            <h1 className="text-4xl mb-4 flex flex-col">
                Todo List <span className="text-base underline underline-offset-4">A simple React Todo List App</span>
            </h1>
            <ul className="mb-4">{todosList}</ul>
            <NewTodoForm createTodo={create} />
        </div>
    );
}

export default TodoList;