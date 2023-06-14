const express = require('express');
var cors = require('cors');
const router = express.Router();
const { request, getMarriageDetails, getAllMarriageReq, getMarriageReqsByIc } = require("../controller/marriageReq.controller");

router.post("/request", request);
router.get("/getMarriageByIc/:ic", getMarriageDetails);
router.get("/all", getAllMarriageReq);
router.get("/:ic", getMarriageReqsByIc);

module.exports = router;