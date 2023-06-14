const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
    userConsultationId: {
        type: String
    },
    paid: {
        type: String
    },
    divorce: {
        type: String
    },
    children: {
        type: Number
    },
    complaint: {
        type: String
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model('Consultation', consultationSchema)