const express = require("express");
const categoriesController = require("../contollers/Category");
const { uploader } = require("../utils/uploader");
const categoriesRouter = express.Router();

categoriesRouter
  .route("/")
  .post(uploader("Categories").single("image"), categoriesController.create);

module.exports = categoriesRouter;
