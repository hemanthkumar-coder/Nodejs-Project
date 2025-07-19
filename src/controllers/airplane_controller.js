const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully Create an aiplane",
      error: {},
    });
  } catch (err) {
    return res.status(StatusCodes.CREATED).json({
      success: false,
      message: "Something Went Wrong while Creating an aiplane",
      error: err,
    });
  }
}

module.exports = {
  createAirplane,
};
