const { Router } = require("express");
const routes = Router();

routes.get("/teste", (req, res) => {
  return res.send("ola mundo");
});

module.exports = routes;
