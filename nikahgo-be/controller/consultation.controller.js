const Consultation = require("../model/consultation.model");
const asyncHandler = require("express-async-handler");

const complaint = asyncHandler(async (req, res) => {
  const data = req.body;

  try {
    const result = await Consultation.create(data);

    if (result) {
      res.status(200).json(result);
    }
  } catch (err) {
    throw new Error(err);
  }
});

const getAllComplaints = asyncHandler(async (req, res) => {
  const complaints = await Consultation.find();

  if (complaints) {
    res.status(200).json(complaints);
  } else {
    res.status(404);
    throw new Error("No courses found");
  }
});

const getComplaintDetails = asyncHandler(async (req, res) => {
  const consultationId = req.params.consultationId;
  const complaint = await Consultation.findById(consultationId);

  if (complaint) {
    res.status(200).json(complaint);
  } else {
    res.status(404);
    throw new Error("Course not found");
  }
});

module.exports = { complaint, getAllComplaints, getComplaintDetails };
