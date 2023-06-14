const mongoose = require('mongoose');

const marriageRegSchema = new mongoose.Schema({
    userMarriageRegId: {
        type: String
    },
    regType: {
        type: String
    },
    slipNo: {
        type: Number
    },
})

module.exports = mongoose.model('MarriageReg', marriageRegSchema)