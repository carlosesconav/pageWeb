const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//middleware

app.use(express.static('public'));


app.get('/', (req, res) => {

    res.render('home',{

        nombre: 'Carlos Escobar',
        empresa: 'Carvajal'

    });

})

app.get('/generic', (req, res) => {

    res.render('generic',{

        nombre: 'Carlos Escobar',
        empresa: 'Carvajal'

    });

})

app.get('/elements', (req, res) => {

    res.render('elements',{

        nombre: 'Carlos Escobar',
        empresa: 'Carvajal'

    });

})

// app.get('*', (req, res) => {

//     res.sendFile(__dirname + '/public/404.html');

// })

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

})