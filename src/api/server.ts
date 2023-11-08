import dotenv from "dotenv";
import app from "./app";
dotenv.config();
import { db } from "./config/prisma";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  db.$connect(); // Conecte o PrismaClient

  console.log(`Server started successfully at port ${PORT}`);
});
