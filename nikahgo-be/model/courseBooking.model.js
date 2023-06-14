const mongoose = require('mongoose');

const courseBookingSchema = new mongoose.Schema({
    userBookingId: {
        type: String
    },
    courseId: {
        type: String
    },
    status: {
        type: String
    },
})

module.exports = mongoose.model('CourseBooking', courseBookingSchema)