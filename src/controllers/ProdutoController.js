const Produto = require("../models/Produto");
module.exports = {
  ///
  //  INDEX
  //
  async index(req, res) {
    const produtos = await Produto.find();
    return res.send(produtos);
  },
  ///
  //  STORE
  //
  async store(req, res) {
    console.log(req.body);
    const { nome, preco, quantidade } = req.body;

    let produto = await Produto.create({
      nome,
      preco,
      quantidade
    });
    return res.send(produto);
  },

  ///
  //  UPDATE
  //

  async update(req, res) {
    let id = req.params.id;
    let { nome, preco, quantidade, comprado } = req.body;

    try {
      let produto = await Produto.findOne({ _id: id });
      if (produto) {
        produto.comprado = comprado;
        produto.nome = nome;
        produto.preco = preco;
        produto.quantidade = quantidade;

        let sucesso = produto.save();
        return res.json(req.body);
      } else {
      }
    } catch (error) {
      console.log(error);
      return res.json({ Erro: `${error}` });
    }
  },
  ///
  //  DELETE
  //
  async delete(req, res) {
    let id = req.params.id;

    try {
      let produto = await Produto.findOne({ _id: id });

      if (produto) {
        let nome = produto.nome;
        let sucesso = await Produto.deleteOne({ _id: id });
        return res.json({ sucesso: `O produto ${nome} foi deletado` });
      } else {
        return res.json({ erro: "O produto não foi encontrado" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(`${error}`);
    }
  }
};
