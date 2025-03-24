import prisma from "@/utils/db"

export default async function SimpleDb() {

  // await prisma.todo.create({
  //   data: {
  //     title: 'Learn how to use Prisma 3',
  //     done: true,
  //   }
  // })

  const todo = await prisma.todo.findFirst()
  console.log("First record: ", todo)

  const todos = await prisma.todo.findMany()
  console.log("First record: ", todos)

  const todoX = await prisma.todo.findMany( { where: { title: "xxx" } } )
  console.log("X record: ", todoX)

  return (
    <div>
      <h1>Simple DB</h1>
      find first : {JSON.stringify(todo)}
      <hr />
      <br />
      find many : { JSON.stringify(todos) }
      <hr />
      <br />
      find with condition todoX: { JSON.stringify(todoX) }
    </div>
  )
}
