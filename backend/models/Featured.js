const mongoose = require("mongoose");

const featuredsModel = mongoose.model("Featureds", {
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
    maxLength: 200,
  },
  restaurants: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Restaurants",
    },
  ],
});

module.exports = featuredsModel;
