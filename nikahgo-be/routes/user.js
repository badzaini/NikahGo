const express = require('express');
const { register, getUser } = require('../controllers/user');

const router = express.Router()

router.post("/register", register);

router.get("/getUser", getUser);

module.exports = router;




