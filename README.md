# Crud Simples com Node.js

Projeto realizado para praticar o básico de Node.js,ExpressJs e Jest.

 ## Tecnologias Utilizadas

- TypeScript
- Node.js
- Express
- Jest
  
[![My Skills](https://skillicons.dev/icons?i=nodejs,jest,express,typescript)](https://skillicons.dev)

## Instrução

```
git clone https://github.com/Phdrox/Crud.git
npm install
```
Para rodar o arquivo de teste.
```npm run test ```
Para rodar a api.
```npm run dev ```
### Requisição Get
``http://localhost:8080``
Caso deseje buscar por um resultado específico
``http://localhost:8080/id``

>Esquema de resposta

```json
{
"id":6,
"name":"Larissa",
"idade":28
}
```
### Requisição Post
``http://localhost:8080``

Inserir no body.
>{ nome:string, idade:number }

>Esquema de resposta

```json
{"message":"Enviado com sucesso"}
```

### Requisição Put
``http://localhost:8080/id``

Inserir no body com os dados que deseja atualizar.
>{ nome:string, idade:number }

>Esquema de resposta

```json
{"message":"Atualizado com sucesso"}
```

### Requisição Delete
``http://localhost:8080/id``

>Esquema de resposta

```json
{"message":"Deletado com sucesso"}
```
________________________________________________________________________________________________________
Os dados são Gravados no arquivo dados.json, porém pode utilizar banco de dados para gravação, atualização, verificação e deleção dos dados,
ao alterar parte da codificação. 






