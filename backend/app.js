const express = require("express");
const path = require("path");
const categoriesRouter = require("./routes/Category");
const dishesRouter = require("./routes/Dish");
const restaurantsRouter = require("./routes/Restaurant");
const featuredsRouter = require("./routes/Featured");
require("./config/db");

const app = express();
app.use(
  "/uploads/Restaurants/",
  express.static(path.join(__dirname, "uploads", "Restaurants"))
);

app.use(
  "/uploads/Dishes/",
  express.static(path.join(__dirname, "uploads", "Dishes"))
);

app.use(
  "/uploads/Categories/",
  express.static(path.join(__dirname, "uploads", "Categories"))
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/dishes/", dishesRouter);
app.use("/api/categories/", categoriesRouter);
app.use("/api/restaurants/", restaurantsRouter);
app.use("/api/featureds/", featuredsRouter);

app.listen(8000, () => {
  console.log("Listening on porst 8000");
});
