const express = require('express');
var cors = require('cors');
const router = express.Router();
const { register, login, getAllUsers, updateProfile, getUserByIC } = require("../controller/user.controller");

router.post("/register", register);
router.get("/login/:email", login);
router.get("/all", getAllUsers);
router.put("/:email/profile", updateProfile);
router.get("/getUserByIC/:IC", getUserByIC);

module.exports = router;