const express = require("express");
const { getAllDoctors } = require("../controllers/doctorcontroller");
const router = express.Router();

router.get("/list", getAllDoctors);

module.exports = router;
