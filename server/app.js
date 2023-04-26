require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);


const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Приложение запущено на порте ${PORT}`));
  } catch (e) {
    console.error("Произошла ошибка при запуске сервера", e.message);
  }
};
start().then();
