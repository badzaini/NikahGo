const express = require('express');
var cors = require('cors');
const router = express.Router();
const { request, getAllRequest } = require("../controller/kadNikah.controller");

router.post("/request", request);
router.get("/all", getAllRequest);

module.exports = router;