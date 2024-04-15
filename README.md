# API de Exemplo

Este é um projeto simples que demonstra o funcionamento do protocolo http usando o framework Express em Node.js.

## Pré-requisitos

Certifique-se de ter o Node.js v20.12 instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório em sua máquina:
    ```shell
    git clone https://github.com/alisonvor/redes-http
    ```

2. Navegue até o diretório do projeto:
    ```shell
    cd redes-http
    ```

3. Instale as dependências:
    ```shell
    npm install
    ```

## Uso

Para iniciar o servidor, execute o seguinte comando:
```shell
npm start
```

A API estará acessível em [http://localhost:3000](http://localhost:3000).

### Rotas Disponíveis

- **GET /200**: Retorna um sucesso com código de status 200.
- **GET /201**: Retorna um sucesso com código de status 201 e um JSON com um exemplo de resposta.
- **GET /204**: Retorna uma resposta vazia com código de status 204.
- **GET /400**: Retorna um erro de requisição inválida com código de status 400.
- **GET /403**: Retorna um erro de permissão com código de status 403.
- **GET /500**: Retorna um erro interno do servidor com código de status 500.
- **GET /download**: Baixa um arquivo de exemplo (arquivo.txt).
