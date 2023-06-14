const mongoose = require('mongoose');

const kadNikahSchema = new mongoose.Schema({
    userKadIc: {
        type: String
    },
    partnerKadIc: {
        type: String
    },
    userKadName: {
        type: String
    },
    partnerKadName: {
        type: String
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model('KadNikah', kadNikahSchema)