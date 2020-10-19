//import dependecy
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//express init
const server = express();

server
    //use body of req
    .use(express.urlencoded({ extended:true }))

    //import static files
    .use(express.static('public'))

    //configure template engine -> handlebars.js
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    
    //create routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)



//turn on server
server.listen(5500);