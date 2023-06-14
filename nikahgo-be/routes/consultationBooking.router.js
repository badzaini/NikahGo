const express = require('express');
var cors = require('cors');
const router = express.Router();
const { consultBook, getAllConsultations } = require("../controller/consultationBooking.controller");

router.post("/bookConsult", consultBook);
router.get("/allConsultations", getAllConsultations);

module.exports = router;