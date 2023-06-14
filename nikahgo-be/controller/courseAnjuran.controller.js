const CourseAnjuran = require("../model/courseAnjuran.model");
const asyncHandler = require("express-async-handler");

//FUNCTION ADD COURSE
const createCourseAnjuran = asyncHandler(async (req, res) => {
  const {
    place,
    address,
    paid,
    city,
    price,
    capacity,
    dateStart,
    dateEnd,
    timeStart,
    timeEnd,
    pic,
    picPhone,
    note,
    publish
  } = req.body;

  // Check if all required fields are provided
  if (
    !place ||
    !address ||
    !paid ||
    !city ||
    !price ||
    !capacity ||
    !dateStart ||
    !dateEnd ||
    !timeStart ||
    !timeEnd ||
    !pic ||
    !picPhone ||
    !note ||
    !publish
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Create a new courseAnjuran object
  const courseAnjuran = await CourseAnjuran.create({
    place,
    address,
    paid,
    city,
    price,
    capacity,
    dateStart,
    dateEnd,
    timeStart,
    timeEnd,
    pic,
    picPhone,
    note,
    publish
  });

  // Save the courseAnjuran object to the database
  const createdCourseAnjuran = await courseAnjuran.save();

  if (createdCourseAnjuran) {
    res.status(201).json(createdCourseAnjuran);
  } else {
    res.status(400);
    throw new Error("Failed to create course anjuran");
  }
});


//FUNCTION GET ALL COURSE
const getAllCourse = asyncHandler(async (req, res) => {
  const courses = await CourseAnjuran.find();

  if (courses) {
    res.status(200).json(courses);
  } else {
    res.status(404);
    throw new Error("No courses found");
  }
});

//FUNCTION GET COURSE DETAILS
const getCourseDetails = asyncHandler(async (req, res) => {
  const courseId = req.params.courseId;
  const course = await CourseAnjuran.findById(courseId);

  if (course) {
    res.status(200).json(course);
  } else {
    res.status(404);
    throw new Error("Course not found");
  }
});

module.exports = { createCourseAnjuran, getAllCourse, getCourseDetails };