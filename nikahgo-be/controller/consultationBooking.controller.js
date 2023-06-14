const ConsultationBooking = require("../model/consultationBooking.model");
const asyncHandler = require("express-async-handler");

const consultBook = asyncHandler(async (req, res) => {
    const data = req.body;

    try {
        const result = await ConsultationBooking.create(data);

        if (result) {
            res.status(200).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
});

const getAllConsultations = asyncHandler(async (req, res) => {
    const consultations = await ConsultationBooking.find();
  
    if (consultations) {
      res.status(200).json(consultations);
    } else {
      res.status(404);
      throw new Error("No courses found");
    }
  });

module.exports = { consultBook, getAllConsultations };
