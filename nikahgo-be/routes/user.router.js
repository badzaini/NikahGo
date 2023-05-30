const express = require('express');
var cors = require('cors');
const router = express.Router();
const { register } = require("../controller/user.controller");

router.post("/register", register);

module.exports = router;