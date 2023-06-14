const mongoose = require('mongoose');

const incentiveSchema = new mongoose.Schema({
    userIncentiveId: {
        type: String
    },
    partnerIncentiveId: {
        type: String
    },
    bank: {
        type: String
    },
    accBank: {
        type: Number
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model('Incentive', incentiveSchema)