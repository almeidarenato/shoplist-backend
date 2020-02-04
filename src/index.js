const express = require("express");
const app = express();
const { port, database } = require("./config");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(
  `mongodb://shoplist:shoplist@cluster0-shard-00-00-zwru0.mongodb.net:27017,cluster0-shard-00-01-zwru0.mongodb.net:27017,cluster0-shard-00-02-zwru0.mongodb.net:27017/produtos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
