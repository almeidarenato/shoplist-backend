const { Router } = require("express");
const routes = Router();
const ProdutoController = require("./controllers/ProdutoController");

routes.get("/teste", (req, res) => {
  return res.send("ola mundo");
});

routes.get("/produto", ProdutoController.index);
routes.post("/produto", ProdutoController.store);

module.exports = routes;
