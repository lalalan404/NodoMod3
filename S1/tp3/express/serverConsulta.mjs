import express from "express";

const app = express();
const PORT = 3000;

//ruta GET con parametro de ruta
//solicitud:http://localhsoto:3000/profile?edad=30
app.get("/profile", (req, res) => {
  const edad = req.query.edad;
  console.log(`edad recibida ${edad}`);
  res.send(`edad del eprfil: ${edad}`);
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});
