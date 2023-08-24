const express = require("express");
const dishesController = require("../contollers/Dish");
const { uploader } = require("../utils/uploader");
const dishesRouter = express.Router();

dishesRouter
  .route("/")
  .post(uploader("Dishes").single("image"), dishesController.create);

module.exports = dishesRouter;
