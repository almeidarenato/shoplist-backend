const express = require("express");
const app = express();
const { port, database } = require("./config");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const uri =
  "mongodb+srv://shoplist:shoplist@cluster0-zwru0.mongodb.net/produtos?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, err => {
  if (err) console.log(err);
  else console.log(`Servidor rodando na porta ${port}`);
});
