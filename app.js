const express = require('express'); // import express
const app = express(); // create express app 
const db = require('./db/connection'); // import db
const port = 3000; // set port

//rotas
app.get('/', (req, res) => { // create route
    res.send('testando nodemon')
})

// db connection
db.authenticate().then(() => {
    console.log('A conexão com o banco de dados foi estabelecida.'); // log connection
}).catch(err => {
    console.error('Ocorreu um erro:', err); // log error
});

// start server
app.listen(port, () => { 
    console.log(`App listening at http://localhost:${port}`)
})