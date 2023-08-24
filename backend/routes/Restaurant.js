const express = require("express");
const restaurantsController = require("../contollers/Restaurant");
const { uploader } = require("../utils/uploader");
const restaurantsRouter = express.Router();

restaurantsRouter
  .route("/")
  .post(uploader("Restaurants").single("image"), restaurantsController.create)
  .get(restaurantsController.getAll);

module.exports = restaurantsRouter;
