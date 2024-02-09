const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.URI;
// const dbName = 'TastyByte';

const connectDB = async () => {
    await mongoose.connect(uri, { dbName: process.env.DB_NAME })
    console.log('connected to database')


    // Create Collection for you db

    // const kittySchema = new mongoose.Schema({
    //     name: String
    // });


    // const Kitten = mongoose.model('Kitten', kittySchema);

    // const silence = new Kitten({ name: 'Silence' });
    // console.log(silence.name);
}

module.exports = connectDB;