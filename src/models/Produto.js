const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const ProdutoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  quantidade: Number
});

module.exports = mongoose.model("Produto", ProdutoSchema);
