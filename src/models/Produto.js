const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const ProdutoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  quantidade: Number,
  comprado: { type: Boolean, default: false }
});

module.exports = mongoose.model("Produto", ProdutoSchema);
