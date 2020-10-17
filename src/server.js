//import dependecy
const express = require('express');
const path = require('path');


//express init
const server = express();

server
    //import static files
    .use(express.static('public'))

    //configure template engine -> handlebars.js
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //crete route
    .get('/', (req, res) => {
    return res.render('index')
    })


//turn on server
server.listen(5500);