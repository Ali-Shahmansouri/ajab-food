const express = require("express");
const featuredsController = require("../contollers/Featured");
const featuredsRouter = express.Router();

featuredsRouter
  .route("/")
  .post(featuredsController.create)
  .get(featuredsController.getAll);

module.exports = featuredsRouter;
