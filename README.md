## Descrição / Description

**PT-BR**

- Essa API foi desenvolvida durante o trabalho de conclusão do curso do aluno Nicolas Nascimento Maso referente ao curso de bacharel em Sistemas de Informação da Universidade Federal de Santa Catarina.
- A API está configurada para receber solicitações com o padrão REST, GraphQL e também gRPC.
- O projeto permite uma comparação de desempenho entre REST, GraphQL e gRPC por meio da execução de scripts de testes utilizando a ferramenta Grafana k6.
- Possui casos de uso relacionados a filmes, atores de um filme, equipes de um filme e lançamentos de um filme.

**EN**

- This API was developed during Nicolas Nascimento Maso's course completion work for the Bachelor's degree in Information Systems at the Federal University of Santa Catarina.
- The API is configured to receive requests using the REST standard, GraphQL and also gRPC.
- The project enables a performance comparison between REST, GraphQL and gRPC by running test scripts using the Grafana k6 tool.
- It has use cases related to movies, movie actors, movie crews and movie releases.

## Ferramentas necessárias / Tools required

- NestJS
- Node.js
- MongoDB
- Grafana k6

## Instalação / Installation

**PT-BR**

- Para instalar as dependências da aplicação basta estar com o [Node.js](https://nodejs.org/en) instalado em sua máquina e executar o comando abaixo.

**EN**

- To install the application's dependencies, simply have [Node.js](https://nodejs.org/en) installed on your machine and run the command below.


```bash
$ npm install
```


## Executando a aplicação / Running the application

**PT-BR**

- Para executar a aplicação é necessário executar o comando abaixo.

**EN**

- To run the application, execute the command below.

```bash
$ npm run dev
```


## Executando os testes / Running tests

**PT-BR**

- Os scripts dos testes estão armazenados na raiz do projeto dentro da pasta tests > k6, separados por cada padrão (REST, GraphQL e gRPC). Eles podem ser modificados conforme o teste que precisa ser executado, bem como modificação dos parâmetros, dados, etc.

- Para a execução dos testes, é necessário inicialmente a instalação da ferramenta [Grafana k6](https://k6.io/).

- Após a instalação da ferramenta, a aplicação precisa estar em execução e basta executar os testes com o comando da ferramenta k6, conforme exemplo abaixo.

**EN**

- The test scripts are stored in the root of the project in the tests > k6 folder, separated by each standard (REST, GraphQL and gRPC). They can be modified according to the test that needs to be run, as well as changing parameters, data, etc.

- To run the tests, you first need to install the [Grafana k6](https://k6.io/) tool.

- Once the tool has been installed, the application needs to be running and simply execute the tests with the k6 tool command, as shown in the example below.


```bash
$ k6.exe run nome-do-script.js
```


