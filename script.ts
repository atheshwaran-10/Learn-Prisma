import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


async function main() {
  //! Here is the Prisma database operations will happen.
  const flag = await prisma.user.findMany({
    

  })

  console.log(flag);
}

//!if there is error in main database needs to be disconnected and error should be logged
main()
  .catch(e => {
    console.log(e);
  })
  .finally(async () => {
    await prisma.$disconnect()
  })