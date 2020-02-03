const express = require("express");
const app = express();
const { port } = require("./config");

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
