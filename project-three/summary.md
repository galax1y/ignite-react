# Fake API > json-server

**Útil para desenvolver o front-end sem depender do backend estar pronto.**

`npm i json-server -D` Instala a biblioteca como dependência de desenvolvimento

1. Criar um arquivo ex.: server.json como se fosse um banco de dados na raiz da aplicação

```json
{
  "transactions": [
    {
      "id": 1,
      "description": "Desenvolvimento de site",
      "type": "income",
      "category": "Venda",
      "price": 14000,
      "createdAt": "2023-01-04T17:41:28.677Z"
    },
    {
      "id": 2,
      "description": "Hambúrguer",
      "type": "outcome",
      "category": "Alimentação",
      "price": 59.9,
      "createdAt": "2023-01-04T17:46:28.677Z"
    }
  ]
}
```

2. Iniciar a API fake `npx json-server server.json` ou iniciar a API fake no modo **watch** `npx json-server server.json -w` mudanças no arquivo server.json vão ocasionar um reload

3. Acessar as rotas de acordo com o arquivo `server.json`

- `localhost:xxxx/transactions` retorna todos os objetos na rota **transactions**
- `localhost:xxxx/transactions/1` busca objeto com id 1 na rota **transactions**

A biblioteca é bem completa e já vem com várias funcionalidades incluindo fazer POST, UPDATE, DELETE, ordenar, filtrar e muitos mais.

---

## Radix

É uma biblioteca de componentes de UI totalmente tipados que oferece componentes sem estilização, mas com acessibilidade pré-pronta, fácil customização e melhor experiência de desenvolvimento.

Além disso, cada componente pode ser instalado individualmente, mantendo a aplicação leve.

---

## React Dev Tools

Uma extensão que permite ver a hierarquia de componentes e suas renderizações, acesso à contextos, tempo de execução (performance), componentes que renderizam em cada ação específica.
