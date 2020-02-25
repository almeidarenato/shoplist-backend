const { deepEqual } = require("assert");
//const ProdutoController = require("./src/controllers/ProdutoController");
const axios = require("axios");

describe("Api de Manipulação de Lista de Compras", async () => {
  it("deve trazer a lista de itens cadastrados", async () => {
    const expected = true;
    const result = await axios.get("http://localhost:8084/produto");
    if (result.data.length > 0) deepEqual(true, expected);
    else deepEqual(false, expected, `A lista não retornou resultado`);
  });
});
