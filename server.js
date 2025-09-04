const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/cadastrosreserva', (req, res) => {
    const reserva = req.body;
    
    console.log('Reserva recebida:', reserva);

    res.status(201).json({
        message: "Reserva recebida com sucesso!",
        data: reserva
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.post('/cadastrosreserva', (req, res) => {
    console.log("Recebendo requisição POST:", req.body); 
    const reserva = req.body;
    cadastros.push(reserva);
    res.json({
        message: 'Reserva recebida com sucesso!',
        reserva: reserva
    });
});