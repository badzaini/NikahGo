const express = require('express');
var cors = require('cors');
const router = express.Router();
const { registerMarriage, getAllMarriageReg } = require("../controller/marriageReg.controller");

router.post("/register", registerMarriage);
router.get("/allReg", getAllMarriageReg);

module.exports = router;