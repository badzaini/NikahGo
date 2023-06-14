const MarriageReg = require("../model/marriageReg.model");
const asyncHandler = require("express-async-handler");

const registerMarriage = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await MarriageReg.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getAllMarriageReg= asyncHandler(async (req, res) => {
    const marriages = await MarriageReg.find();
  
    if (marriages) {
      res.status(200).json(marriages);
    } else {
      res.status(404);
      throw new Error("No courses found");
    }
  });

module.exports = { registerMarriage, getAllMarriageReg };
