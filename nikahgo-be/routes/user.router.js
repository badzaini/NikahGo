const express = require('express');
var cors = require('cors');
const router = express.Router();
const { register, login, getAllUsers } = require("../controller/user.controller");

router.post("/register", register);
router.get("/login/:email", login);
router.get("/all", getAllUsers);

module.exports = router;