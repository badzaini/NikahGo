const mongoose = require('mongoose');

const consultationBookingSchema = new mongoose.Schema({
    userBookingId: {
        type: String
    },
    consultationId: {
        type: String
    },
    place: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    status: {
        type: Number
    },
    counselor: {
        type: String
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model('ConsultationBooking', consultationBookingSchema)