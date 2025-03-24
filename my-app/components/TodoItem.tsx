'use client'
import STYLE from "@/constants/style"

export default function TodoItem({ id, index, title, done, deleteTask }
    : {
        id: string
        index: number
        title: string
        done: boolean
        deleteTask: (id: string) => void
    }
) {

    return (
        <li key={id}>
            {index + 1}. {title} {done ? "✅" : "❌"}
            <button className={STYLE}
                onClick={() => deleteTask(id)}
            > x </button>
        </li>
    )
}
