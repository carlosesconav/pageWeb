const express = require('express');
const hbs = require('hbs');


const app = express();
const port = 4000;

//handlebars

app.set('view engine', 'hbs');

//middleware

app.use(express.static('public'));


app.get('/', (req, res) => {

    res.render('home',{

        nombre: 'Carlos Escobar',
        empresa: 'Carvajal'

    });

})

app.get('/generic', (req, res) => {

    res.sendFile(__dirname + '/public/generic.html');

})

app.get('/elements', (req, res) => {

    res.sendFile(__dirname + '/public/elements.html');

})

// app.get('*', (req, res) => {

//     res.sendFile(__dirname + '/public/404.html');

// })

app.listen(port, () => {

    console.log(`Ejemplo de app listening en http://localhost:${port}`);

})