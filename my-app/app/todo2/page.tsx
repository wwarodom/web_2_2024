'use client'
import { useState } from "react";
interface TaskType {
    id: number;
    name: string;
    time: number;
}

const STYLE = 'border-2 border-black px-2'


export default function Todo2() {

    const [formTask, setFormTask] = useState<TaskType>({ id: -1, name: '', time: 0 });

    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, name: "Reading a book", time: 100 },
        { id: 2, name: "Writing a program", time: 30 },
        { id: 3, name: "Sleeping", time: 120 },
    ]);

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormTask({ ...formTask, [name]: value });
    }

    function addTask() {
        const newTask = {
            ...formTask,
            id: (tasks.length) ? tasks[tasks.length - 1].id + 1 : 1
        };
        setTasks([...tasks, newTask]);
        setFormTask({ id: -1, name: '', time: 0 });
    }

    function deleteTask(id: number) {
        console.log("ID: ", id)
        const newTasks = tasks.filter((task) => (task.id !== id))
        setTasks(newTasks);
    }

    function editTask(id: number) {
        console.log("ID: ", id)
        const index = tasks.findIndex((task) => (task.id === id))
        console.log(tasks[index]);
        setFormTask(tasks[index]);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Todo2</h1>
            <h2 className="text-xl font-bold"> 
                {formTask.id === -1 ? "Add" : "Update"} task
            </h2>
            <div className="mb-4">
                <div className="mb-2">
                    <label htmlFor="name">Name: </label>
                    <input
                        className={STYLE}
                        type="text" name="name"
                        value={formTask.name}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="name">Time: </label>
                    <input
                        className={STYLE}
                        type="number" name="time"
                        value={formTask.time}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <button className={STYLE}
                        onClick={addTask}
                    >
                        {formTask.id === -1 ? "Add" : "Update"}
                    </button>
                </div>

            </div>

            <h2 className="text-xl font-bold">List</h2>
            <ul>
                {tasks.map((task, index) =>
                (<li key={index}>
                    {task.id}. {task.name}: {task.time}
                    <button
                        className={`${STYLE} m-2 bg-red-800 text-white`}
                        onClick={() => deleteTask(task.id)}
                    >delete</button>
                    <button
                        className={`${STYLE} m-2 bg-red-800 text-white`}
                        onClick={() => editTask(task.id)}
                    >edit</button>
                </li>)
                )}
            </ul>
        </div>
    )
}