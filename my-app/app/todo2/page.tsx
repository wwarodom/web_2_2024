'use client'
import { useState } from "react";
interface TaskType {
    id: number;
    name: string;
    time: number;
}

const STYLE = 'border-2 border-black px-2'


export default function Todo2() {
    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, name: "Reading a book", time: 100 },
        { id: 2, name: "Writing a program", time: 30 },
        { id: 3, name: "Sleeping", time: 120 },
    ]);

    return (
        <div>
            <h1 className="text-2xl font-bold">Todo2</h1>
            <h2 className="text-xl font-bold">Add task</h2>
            <div className="mb-4">
                <div className="mb-2">
                    <label htmlFor="name">Name: </label>
                    <input 
                        className={STYLE}
                        type="text" name="name" />
                </div>
                <div className="mb-2">
                    <label htmlFor="name">Time: </label>
                    <input 
                        className={STYLE}
                        type="number" name="time" />
                </div>
                <div>
                    <button className={STYLE}>Add</button>
                </div>

            </div>

            <h2 className="text-xl font-bold">List</h2>
            <ul>
                {tasks.map((task, index) =>
                (<li key={index}>
                    {task.id}. {task.name}: {task.time}
                </li>)
                )}
            </ul>
        </div>
    )
}