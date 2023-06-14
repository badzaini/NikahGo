const mongoose = require('mongoose');

const marriageReqSchema = new mongoose.Schema({
    userMarriageIc: {
        type: String
    },
    partnerMarriageIc: {
        type: String
    },
    place: {
        type: String

    },
    nikahDate: {
        type: Date

    },
    dowryType: {
        type: String

    },
    dowry: {
        type: Number

    },
    gift: {
        type: Number

    },
    waliName: {
        type: String

    },
    waliIc: {
        type: String

    },
    waliAddress: {
        type: String

    },
    waliBirth: {
        type: Date

    },
    waliAge: {
        type: Number

    },
    waliPhone: {
        type: Number

    },
    waliRelay: {
        type: String

    },
    wit1Name: {
        type: String

    },
    wit1Ic: {
        type: Number

    },
    wit1Address: {
        type: String

    },
    wit1Phone: {
        type: Number

    },
    wit2Name: {
        type: String

    },
    wit2Ic: {
        type: Number

    },
    wit2Address: {
        type: String

    },
    wit2Phone: {
        type: Number

    },
    nikahCategory: {
        type: String

    },
    status: {
        type: String

    }
})

module.exports = mongoose.model('MarriageReq', marriageReqSchema)