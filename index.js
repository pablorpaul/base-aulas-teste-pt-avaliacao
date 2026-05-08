const express = require("express");
const routers = require("./src/routes/pessoa.js");
const { exec } = require("child_process");

const app = express();



app.use(express.json());

const verificarJson = (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        const contentType = req.headers['content-type'];
        if (!contentType || !contentType.includes('application/json')) {
            return res.status(415).json({
                erro: 'Tipo de mídia não suportado',
                mensagem: 'Por favor, envie os dados no formato JSON e configure o Header Content-Type.'
            });
        }
    }
    next();
};

app.use(verificarJson);

app.use(routers);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

  console.log(`Servidor rodando na porta ${PORT}`);
});
