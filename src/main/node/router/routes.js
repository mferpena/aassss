const express = require("express");
const router = express.Router();

const defaultRouter = require("./default");

router.use("/default", defaultRouter);

module.exports = router;
