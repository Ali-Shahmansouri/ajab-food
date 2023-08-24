const mongoose = require("mongoose");

const RestaurantsModel = mongoose.model("Restaurants", {
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  shortDescription: {
    type: String,
    required: true,
    maxLength: 200,
  },
  image: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Categories",
  },
  dishes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Dishes",
    },
  ],
});

module.exports = RestaurantsModel;
