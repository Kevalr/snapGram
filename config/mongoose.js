const mongoose = require('mongoose');

const mongoDBUrl = 'mongodb://127.0.0.1/';
const database = 'snapgram_development';

const db = async () => {
    try {
        const conn = await mongoose.connect(`${mongoDBUrl}${database}`);
        console.log('MongoDB connected : ', conn.connection.host);
    }
    catch(error) {
        console.log(`Error while connecting to database : ${error}`);
    }
}

module.exports = db;