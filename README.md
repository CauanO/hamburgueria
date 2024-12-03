## Status do Projeto

[![Completo](https://img.shields.io/badge/Projeto-Completo-green)](#)

---

# Projeto Node.js com Express e Handlebars

## Sobre o Projeto

Este projeto é um sistema simples criado com **Node.js**, **Express** e **Handlebars**, integrado ao banco de dados usando o Sequelize e MySQL. Ele permite o cadastro e gerenciamento de dados através de um formulário interativo.

---

## Funcionalidades

- Renderização de páginas com **Handlebars**.
- Cadastro de usuários com:
  - Nome
  - E-mail
  - CEP
  - Logradouro
  - UF
  - Mensagem
- Armazenamento de dados no banco de dados.
- Validação e envio de informações via **POST**.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Express-Handlebars**
- **Sequelize**
- **MySQL**
- **Body-Parser**

---

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-projeto>
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o banco de dados**:
   Certifique-se de ter um banco de dados MySQL rodando. Configure suas credenciais no arquivo `./models/db.js`.

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

5. **Acesse o sistema** em [http://localhost:8081](http://localhost:8081).

---

## Dependências

As dependências utilizadas no projeto estão listadas no arquivo `package.json`:

```json
{
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.19.2",
    "express-handlebars": "^7.1.2",
    "mysql2": "^3.9.7",
    "sequelize": "^6.37.3"
  }
}
```

---

## Estrutura do Projeto

```
.
├── app.js                # Arquivo principal do servidor
├── models/
│   ├── db.js             # Configuração do banco de dados
│   └── Form.js           # Modelo para o formulário
├── public/               # Arquivos estáticos (CSS, imagens, etc.)
├── views/                # Páginas renderizadas pelo Handlebars
│   └── home.handlebars   # Página inicial
└── package.json          # Configuração do projeto
```

---

## Rotas Disponíveis

- **`GET /`**: Renderiza a página inicial.
- **`POST /add`**: Adiciona um novo registro no banco de dados.

---

## Banco de Dados

Certifique-se de configurar o arquivo `db.js` com as credenciais corretas para o MySQL:

```javascript
const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;
```

---

## Autor

Projeto desenvolvido como exemplo para estudos de **Node.js**, **Express** e **Sequelize**.
