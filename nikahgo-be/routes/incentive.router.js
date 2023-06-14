const express = require('express');
var cors = require('cors');
const router = express.Router();
const { apply, getAllIncentives } = require("../controller/incentive.controller");

router.post("/apply", apply);
router.get("/all", getAllIncentives);

module.exports = router;