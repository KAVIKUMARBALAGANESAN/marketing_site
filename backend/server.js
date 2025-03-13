require("dotenv").config();  // ✅ Load environment variables at the top

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

sequelize.sync().then(() => console.log("Database connected")).catch(err => console.error("Database connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
