import express from "express";
import { connectDB } from "./config/dbConfig.mjs";
import superHeroRoutes from "./routes/superHeroRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 300;

//middleware para parsear JSON
app.use(express.json());

//conexion a MongoDB
connectDB();

//configuracion de rutas
app.use("/api", superHeroRoutes);

//bienvenida en la pagina principal
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando correctamente!");
  res.send("¡Servidor funcionando correctamente!");
});

//manejo de erroeres para rutas no encotnradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "ruta no encontrada" });
});
app.listen(PORT, () => {
  console.log(
    `¡Servidor funcionando correctamente!"en http://localhost:${PORT}`,
  );
});
