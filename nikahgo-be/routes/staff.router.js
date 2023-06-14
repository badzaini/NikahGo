const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerStaff, getStaffByEmail} = require("../controller/staff.controller");

router.post("/register", registerStaff);
router.get("/getStaffByEmail/:email", getStaffByEmail);

module.exports = router