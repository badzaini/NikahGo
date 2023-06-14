const Incentive = require("../model/incentive.model");
const asyncHandler = require("express-async-handler");

//this is the ADD function
const apply = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await Incentive.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

//GET function
const getAllIncentives= asyncHandler(async (req, res) => {
    const incentives = await Incentive.find();
  
    if (incentives) {
      res.status(200).json(incentives);
    } else {
      res.status(404);
      throw new Error("No courses found");
    }
  });

module.exports = { apply, getAllIncentives };
