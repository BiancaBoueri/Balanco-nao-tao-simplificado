<h1 align="center">
	<img alt="Logo" src="https://github.com/BiancaBoueri/Balanco-nao-tao-simplificado/blob/main/img/logo.png" width="150px" /> 
</h1>

<h3 align="center">
  Backend Assessment - Pi Lab
</h3>


<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/BiancaBoueri/Balanco-nao-tao-simplificado">

  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/BiancaBoueri/Balanco-nao-tao-simplificado">
  
  <a href="https://github.com/BiancaBoueri/Balanco-nao-tao-simplificado/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/BiancaBoueri/Balanco-nao-tao-simplificado">
  </a>
  
  <a href="https://github.com/BiancaBoueri/Balanco-nao-tao-simplificado/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/BiancaBoueri/Balanco-nao-tao-simplificado">
  </a>

</p>

<p align="center">
  <a href="#-challenge">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;
  <a href="#-getting-started">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-routes">Rotas</a>&nbsp;&nbsp;&nbsp;
</p>

<p id="insomniaButton" align="center">
  <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
</p>

## 👨🏻‍💻 Desafio

O desafio é desenvolver uma API que faça um balanço de dados provido por um banco de dados.

## 💻 Começando

### Requirementos

- [Yarn](https://yarnpkg.com/)
- [Node](https://nodejs.org/en/)
- [SQLite](https://www.sqlite.org/index.html)


**Clone o projeto e abra a pasta**

```bash
$ git clone https://github.com/BiancaBoueri/Balanco-nao-tao-simplificado.git && cd Balanco-nao-tao-simplificado
```

**Siga os seguintes passos**

```bash
# Instale todas as dependências
$ yarn

# Rode as migrations
$ yarn typeorm migration:run

# Execute o projeto
$ yarn dev

```

##  Solução

Para a solução do problema, pensei em uma estrutura de dados em forma de árvore.

Inicialmente os dados seriam ordenados em uma árvore, na qual, por exemplo, o nó "Ativos" é pai dos nós "Ativo Circulante", "Ativo Permanente" e "Ativo à Longo Prazo", e assim sucessivamente conforme a tabela Categories, de modo que a "menor conta de entidade" é uma folha da árvore, ou seja, um nó que não tem filhos.

Conforme ilustrado no diagrama:

<img alt="diagrama" src="https://github.com/BiancaBoueri/Balanco-nao-tao-simplificado/blob/main/img/diagram.png" width="400px" /> 

Ao final teríamos uma seguinte estrutura:

```json
  [1,
    [2,
      [3], [4], [5], [6], [7], [8]], 
    [9, 
      [10], [11], [12]],
    [13, 
      [14, 
        [15], [16]]], 
    [17, 
      [18]]
```

Com os dados organizados dessa forma, a tabela Releses seria percorrida, realizando a multiplicação da coluna `value` ela coluna `amount`, idenficando pela `category_id`, e assim, retornando um JSON do balanço finalizado.


## 📝  Rotas 

As rotas diponíveis na API são:

Obter balanço (Token)
``` bash
GET /balance
```

Criação de usuário
``` bash
POST /users
```
``` bash
body {
  "name": string,
  "email": string,
  "password": string
}
```

Authenticação
```bash
POST /login
```
```bash
body {
  "name": string,
  "password": string,
}
```

A API usa autentificação JWT.

---
