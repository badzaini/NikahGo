const mongoose = require('mongoose');

const courseAnjuranSchema = new mongoose.Schema({
    place: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    paid: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    capacity: {
        required: true,
        type: Number
    },
    dateStart: {
        required: true,
        type: Date
    },
    dateEnd: {
        required: true,
        type: Date
    },
    timeStart: {
        required: true,
        type: String
    },
    timeEnd: {
        required: true,
        type: String
    },
    pic: {
        required: true,
        type: String
    },
    picPhone: {
        required: true,
        type: Number
    },
    note: {
        required: true,
        type: String
    },
    publish: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('CourseAnjuran', courseAnjuranSchema)