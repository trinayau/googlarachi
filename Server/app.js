const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello this is Googlarachi!');
});

//add functionality for returning search results -> send searchpage.html?

//add functionality for sending a random webpage result


module.exports = app; 
