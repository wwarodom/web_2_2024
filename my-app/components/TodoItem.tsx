'use client'
import STYLE from "@/constants/style"

export default function TodoItem({ id, index, title, done }
    : {
        id: string,
        index: number,
        title: string,
        done: boolean
    }
) {
    return (
        <li key={id}>
            {index + 1}. {title} {done ? "✅" : "❌"}
            <button className={STYLE}
                onClick={() => {
                    console.log("Click")
                }}
            > x </button>
        </li>
    )
}
