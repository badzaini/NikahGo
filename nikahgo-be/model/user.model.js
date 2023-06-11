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
    },
    birth: {
        type: Date
    },
    nationality: {
        type: String
    },
    citizenship: {
        type: String
    },
    address: {
        type: String
    },
    education: {
        type: String
    },
    employSector: {
        type: String
    },
    occupation: {
        type: String
    },
    employAddress: {
        type: String
    },
    income: {
        type: Number
    }
})

module.exports = mongoose.model('User', userSchema)