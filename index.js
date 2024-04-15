const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/200', (req, res) => {
    res.status(200).send('Sucesso 200: Requisição OK.');
});

app.get('/201', (req, res) => {
    res.status(201).json({ nome: 'Exemplo de código "Created"' }).send();
});

app.get('/204', (req, res) => {
    res.status(204).send();
});

app.get('/400', (req, res) => {
    res.status(400).send('Erro 400: Requisição inválida. Verifique seus parâmetros.');
});

app.get('/403', (req, res) => {
    res.status(403).send('Erro 403: Requisição inválida. Você não tem permissões.');
});

app.get('/500', (req, res) => {
    res.status(500).send('Erro 500: Ocorreu um erro interno no servidor.');
});

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'arquivo.txt');

    if (fs.existsSync(filePath)) {
        res.setHeader('Content-disposition', 'attachment; filename=arquivo.txt');
        res.setHeader('Content-type', 'text/plain');

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
        res.send();
    } else {
        // Se o arquivo não existe, retorna um erro 404
        res.status(404).send('Arquivo não encontrado.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
