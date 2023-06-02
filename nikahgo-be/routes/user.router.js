const express = require('express');
var cors = require('cors');
const router = express.Router();
const { register, login } = require("../controller/user.controller");

router.post("/register", register);
router.get("/login/:email", login);

module.exports = router;