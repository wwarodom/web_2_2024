'use client'
import { useState } from "react";
interface TaskType {
    id: number;
    name: string;
    time: number;
}

const STYLE='border-2 border-black px-2'


export default function Todo2() {
    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, name: "Reading a book", time: 100 },
        { id: 2, name: "Writing a program", time: 30 },
        { id: 3, name: "Sleeping", time: 120 },
    ]);
 
    return (
        <div>
            <h1>Todo2</h1>
            <ul>
                {tasks.map( () => (<li>xxx</li>))}
            </ul>
        </div>
    )
}