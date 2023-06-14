const KadNikah = require("../model/kadNikah.model");
const asyncHandler = require("express-async-handler");

const request = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await KadNikah.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getAllRequest = asyncHandler(async (req, res) => {
    const requests = await KadNikah.find();

    if (requests) {
        res.status(200).json(requests);
    } else {
        res.status(404);
        throw new Error("No courses found");
    }
});

module.exports = { request, getAllRequest };
