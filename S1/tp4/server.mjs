import express from "express";

const app = express();
const PORT = 3000;

//ruta GET para el Home
//solciitud : http://localhost:3000/profile?edad=50
app.get("/profile", (req, res) => {
  const edad = req.query.edad;
  console.log(`edad recibida,${edad}`);
  res.send(`edad de perfil:${edad}`);
});

//inicar el servidor
app.listen(PORT, () => {
  console.log(`servidor coriiendo en http://localhost:${PORT}`);
});
