const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const setupSwagger = require("./swagger");

const app = express();

// ✅ Fix CORS Issue
app.use(cors({
  origin: "*", // Allow all origins (you can restrict it later)
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

app.use(bodyParser.json());

app.use("/api", userRoutes);

// Setup Swagger
setupSwagger(app);

const PORT = process.env.MYSQLPORT || 5000;

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📄 API Docs available at http://localhost:${PORT}/api-docs`);
});
