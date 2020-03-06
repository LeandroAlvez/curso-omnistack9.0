const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://liusantos:E1212285@curso-omnistack-eeegy.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// PARAMS
//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição ou delete)
//req.body = acessar o corpo da requisição ( para criar ou editar)

app.use(express.json());
app.use(routes);

app.listen(3333);
