interface PostType {
    id: number
    title: string
    author: string
}

export default async function FetchAPI() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()

    return (
        <div>
            <h1>FetchAPI</h1>
            <ul>
                {posts.map((post: PostType) => (
                    <li key={post.id}
                        className="border-2 border-black m-2 p-2 rounded-xl shadow-lg"
                    >
                        {post.id}. {post.title}
                        <div>
                            By: {post.author}
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}
