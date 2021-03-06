const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    try {
        const response = await mongoose.connect(process.env.URL, {useUnifiedTopology: true, 
        useNewUrlParser: true});
        console.log('connection created');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;