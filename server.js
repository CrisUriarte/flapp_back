const express = require("express");
const cors = require("cors");
const dotenv =  require("dotenv");
const cartRoutes = require("./src/routes/cartRoutes.js");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Rutas
app.use("/api/cart", cartRoutes);


// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
