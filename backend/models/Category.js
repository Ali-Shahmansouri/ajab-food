const mongoose = require("mongoose");

const CategoriesModel = mongoose.model("Categories", {
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = CategoriesModel;
