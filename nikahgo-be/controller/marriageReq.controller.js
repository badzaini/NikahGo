const MarriageReq = require("../model/marriageReq.model");
const asyncHandler = require("express-async-handler");

const request = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await MarriageReq.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getMarriageDetails = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const details = await MarriageReq.findOne({ "userMarriageIc": ic });

        if (details) {
            res.status(201).json(details);
        }
    } catch (err) {
        throw new Error(err);
    }
})

const getAllMarriageReq = asyncHandler(async (req, res) => {
    const result = await MarriageReq.find();

    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404);
        throw new Error("No courses found");
    }
});

const getMarriageReqsByIc = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const result = await MarriageReq.find({ "userMarriageIc": ic });

        if (result) {
            res.status(201).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { request, getMarriageDetails, getAllMarriageReq, getMarriageReqsByIc };
