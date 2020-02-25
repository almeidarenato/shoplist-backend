# shoplist-backend

Projeto de Lista de Compras feito em node.js

![API](https://imgur.com/Ja80tXb.png)

## Documentação

https://shoplist.readme.io/reference

## Base URL - Heroku

https://shoplist-api.herokuapp.com/

### Lista de Produtos

Realiza a listagem completa de produtos

![GET](https://img.shields.io/badge/-GET-blue) https://shoplist-api.herokuapp.com/produto

### Cadastrar Novo Produto

Realiza um novo cadastro de produto na base.

JSON de exemplo:

```json
{
  "nome": "Produto",
  "preco": 50.2,
  "quantidade": 3
}
```

![POST](https://img.shields.io/badge/-POST-orange) https://shoplist-api.herokuapp.com/produto

### Atualizar Produto

Realiza a exclusão de um produto da lista

JSON de exemplo:

```json
{
  "comprado": true,
  "nome": "Produto",
  "preco": 50.2,
  "quantidade": 3
}
```

![PUT](https://img.shields.io/badge/-PUT-blueviolet) https://shoplist-api.herokuapp.com/produto/{id}

### Remover Produto

Realiza a exclusão de um produto da lista

![DELETE](https://img.shields.io/badge/-DELETE-red) https://shoplist-api.herokuapp.com/produto/{id}
