const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const model = mongoose.model;

const User = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true
    }
})

module.exports = model('User', User);