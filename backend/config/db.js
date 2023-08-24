const mongoose = require("mongoose");

const dbUrl = "mongodb://0.0.0.0:27017/Deliveroo";
mongoose
  .connect(dbUrl)
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log(err));
