const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    ic: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)