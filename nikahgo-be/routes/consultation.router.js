const express = require('express');
var cors = require('cors');
const router = express.Router();
const { complaint, getAllComplaints, getComplaintDetails } = require("../controller/consultation.controller");

router.post("/complaint", complaint);
router.get("/all", getAllComplaints);
router.get("/:consultationId", getComplaintDetails);

module.exports = router;