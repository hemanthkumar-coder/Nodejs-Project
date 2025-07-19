const express = require("express");
const router = express.Router();
const { infoController } = require("../../controllers/index");
const airplaneRoutes = require("./airplane_routes");
router.get("/info", infoController.info);

router.use("/airplanes", airplaneRoutes);

module.exports = router;
