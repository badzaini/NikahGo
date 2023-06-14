const express = require('express');
var cors = require('cors');
const router = express.Router();
const { createCourseAnjuran, getAllCourse, getCourseDetails } = require("../controller/courseAnjuran.controller");

router.post("/courseAnjuran", createCourseAnjuran);
router.get("/all", getAllCourse);
router.get("/:courseId", getCourseDetails);

module.exports = router;