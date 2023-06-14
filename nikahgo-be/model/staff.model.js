const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffName: {
        required: false,
        type: String
    },
    staffGender: {
        required: true,
        type: String
    },
    staffPhone: {
        required: true,
        type: String
    },
    staffEmail: {
        required: true,
        type: String,
    },
    staffRole: {
        required: true,
        type: String
    },

});

module.exports = mongoose.model('Staff', staffSchema)