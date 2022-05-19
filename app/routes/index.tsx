import { useLoaderData, Form } from "@remix-run/react";
import { ActionFunction, redirect } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type iTodo = {
  id: number;
  title: string;
  done: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const todoTitle = await form.get("todo");
  await prisma.$connect();
  const todo = await prisma.todo.create({
    data: {
      title: todoTitle?.toString() || "",
    },
  });
  prisma.$disconnect();
  return redirect("/");
};

export const loader = async () => {
  await prisma.$connect();
  const todos = await prisma.todo.findMany();
  prisma.$disconnect();
  return todos;
};

export function ErrorBoundry({ error }: any) {
  console.log(error);
  return (
    <div>
      <h1>Sorry An Error Occured</h1>
      <pre>{error}</pre>
    </div>
  );
}

const Todo: React.FC<iTodo> = (props) => {
  return (
    <div className="p-2 text-zinc-700 hover:text-black">
      <p className="text-sm">{props.title}</p>
      <div className="action">{/* <Link to="/api"></Link> */}</div>
    </div>
  );
};

export default function Index() {
  const todos = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="container mx-auto py-4 px-2">
        <h1 className="text-center text-xl">Welcome to Remix</h1>
        <Form method="post" className="max-w-[500px] mx-auto">
          <input
            type="text"
            name="todo"
            id="newtodo"
            placeholder="Enter new todo..."
            className="w-[100%] p-2 mt-3 block rounded outline-none border border-zinc-400"
          />
          <button
            type="submit"
            className="bg-black text-white block lg:w-fit w-full mx-auto my-2 rounded py-1.5 px-4"
          >
            Add
          </button>
        </Form>
        <div className="bg-zinc-300 mt-3 mx-auto max-w-[450px] rounded-lg">
          {todos.map((todo: iTodo) => (
            <Todo {...todo} key={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
