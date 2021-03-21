const express = require('express');
const connect = require('./config/db');
require('dotenv').config();
const app = express();

//connect mongoDB database
connect();


app.get('/', (req, res) => {
    res.send('Hello Blog');
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}` );
});