const CourseBooking = require("../model/courseBooking.model");
const asyncHandler = require("express-async-handler");

const book = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await CourseBooking.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getAllBook = asyncHandler(async (req, res) => {
    const books = await CourseBooking.find();
  
    if (books) {
      res.status(200).json(books);
    } else {
      res.status(404);
      throw new Error("No courses found");
    }
  });

module.exports = { book, getAllBook };
