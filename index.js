const express = require('express');
const hbs = require('hbs');

const app = express()


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials', function(err){})



// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('home',{
        nombre: 'Vicente Candela', 
        titulo: 'Aprendiendo node.js'
    });

});

app.get('/generic', (req, res) => {

    res.sendFile(__dirname+"/views/generic.hbs");

});

app.get('/elements', (req, res) => {

    res.sendFile(__dirname+"/public/elements.html");

});

app.get('*', (req, res) => {

    res.sendFile(__dirname+"/public/404.html");

});

app.listen(8080);