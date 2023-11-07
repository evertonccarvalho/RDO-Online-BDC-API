import app from "./app";

const PORT = Number(process.env.PORT) || 3000;
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
};

start();
