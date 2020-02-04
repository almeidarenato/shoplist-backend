const Produto = require("../models/Produto");

module.exports = {
  async index(req, res) {
    const produtos = await Produto.find();
    return res.send(produtos);
  },
  async store(req, res) {
    console.log(req.body);
    const { nome, preco, quantidade } = req.body;

    let produto = await Produto.create({
      nome,
      preco,
      quantidade
    });
    return res.send(produto);
  }
};
