const express = require('express');
var cors = require('cors');
const router = express.Router();
const { book, getAllBook } = require("../controller/courseBooking.controller");

router.post("/bookCourse", book);
router.get("/all", getAllBook);

module.exports = router;