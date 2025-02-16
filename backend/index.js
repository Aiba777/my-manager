const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Настроим CORS, чтобы frontend мог отправлять запросы
app.use(cors());
app.use(express.json()); // Позволяет работать с JSON-запросами

// Пример API маршрута
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`🚀 Backend запущен на http://localhost:${PORT}`);
});
