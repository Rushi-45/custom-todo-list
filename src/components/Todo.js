import React, { useState } from "react";
import '../Assets/styles/Todo.css';

function Todo({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleClick = evt => {
        remove(evt.target.id);
    };

    const toggleForm = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdate = evt => {
        evt.preventDefault();
        update(todo.id, task);
        toggleForm();
    };

    const handleChange = evt => {
        console.log('handleChange clicked')
        setTask(evt.target.value);
    };

    const toggleSubtask = (evt) => {
        toggleComplete(evt.target.id);
        console.log('toggleSubtask clicked')
        console.log(todo.subTask.show)
        setIsEditing(false);
        if (todo.subTask) {
            todo.subTask.show = !todo.subTask.show;
        }
    };

    let result;
    if (isEditing) {
        result = (
            <div className="flex items-center Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input
                        onChange={handleChange}
                        value={task}
                        type="text"
                        className="flex-grow border-none bg-gray-100 px-4 py-2 text-black"
                    />
                    <button className="px-4 py-2 bg-red-600 text-white uppercase font-bold border border-white ml-2">
                        Save
                    </button>
                </form>
            </div>
        );
    } else {
        result = (
            <div className="Todo">
                <div className="Todo-task-container  w-full">
                    <div className="flex items-center">
                        {/* {console.log(todo.subTask.show)} */}
                        <li
                            id={todo.id}
                            className={`Todo-task-item ${todo.completed ? "completed" : ""}`}
                        >
                            {todo.task}
                        </li>
                        <div className="Todo-buttons">
                            <button onClick={toggleForm}>
                                <i className="fas fa-pen" />
                            </button>
                            <button onClick={handleClick}>
                                <i id={todo.id} className="fas fa-trash" />
                            </button>
                        </div>
                    </div>
                    <button
                        className="Todo-toggle ml-4 flex items-center text-white focus:outline-none"
                        onClick={toggleSubtask}
                        title="Toggle Subtask"
                    >
                        {todo.subTask && (
                            <>
                                <i className={`fas ${todo.subTask.show ? "fa-minus" : "fa-plus"}`} />
                                <span className="ml-2">
                                    {todo.subTask.show ? "Hide Subtask" : "Show Subtask"}
                                </span>
                            </>
                        )}
                    </button>
                    {todo.subTask && todo.subTask.show && (
                        <div className="Todo-subtask">
                            <Todo
                                todo={todo.subTask}
                                remove={remove}
                                update={update}
                                toggleComplete={toggleComplete}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return result;
}

export default Todo;