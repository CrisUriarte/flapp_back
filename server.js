const express = require("express");
const cors = require("cors");
const dotenv =  require("dotenv");
const cartRoutes = require("./src/routes/cartRoutes.js");

dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: ["https://flapp-front.onrender.com", 
      "https://flapp-front-serv.onrender.com/",
      "http://localhost:5173"
    ],  // Permitir frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);
app.use(express.json());


// Rutas
app.use("/api/cart", cartRoutes);


// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
