import express from "express";

//crear una isntancia de express

const app = express();

//configurar el puerto en elque el servidor escuhcara
const PORT = 3000;

//ruta GET con parametro de ruta
//solicitud:http://localhsoto:300/user/123
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`ID del suario recibido: ${userId}`);
  res.send(`perfil del usuario con ID: ${userId}`);
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
