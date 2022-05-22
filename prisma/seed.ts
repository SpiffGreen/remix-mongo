import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const admin = await db.user.create({
    data: {
      email: "admin@admin.com",
      name: "admin admin",
      // this is a hashed version of "twixrox"
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });
  await Promise.all(
    getTodos().map((todo) => {
      const data = { userId: admin.id, ...todo };
      return db.todo.create({ data });
    })
  );
}

seed();

function getTodos() {
  return [
    {
      title: "Select new set of books to read this year",
    },
    {
      title: "Learn basketball",
    },
    {
      title: "Attend school seminar",
    },
    {
      title: "Create software development plan",
    },
    {
      title: "Make delivery plan",
    },
    {
      title: "Meeting with product manager",
    },
  ];
}