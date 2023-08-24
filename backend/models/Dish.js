const mongoose = require("mongoose");

const dishesModel = mongoose.model("Dishes", {
  name: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
    maxLength: 200,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = dishesModel;
