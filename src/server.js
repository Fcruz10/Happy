//import dependecy
const express = require('express');
//express init
const server = express();

//crete route
server.get('/', () => {
    console.log('eeeeee')
});

//turn on server
server.listen(5500)