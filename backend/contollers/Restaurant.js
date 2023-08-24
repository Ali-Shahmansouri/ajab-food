const restaurantsModel = require("../models/Restaurant");
//TODO: Require Validators here ...

exports.create = async (req, res) => {
  //TODO: Implement register validator
  let { name, shortDescription, lat, lng, address, rating, category, dishes } =
    req.body;

  const result = await restaurantsModel.create({
    name,
    shortDescription,
    address,
    category,
    dishes,
    image: req.file.filename,
    lat: Number(lat),
    lng: Number(lng),
    rating: Number(rating),
  });

  res.status(201).json({
    message: "Restaurant created successfully",
    result,
  });
};

exports.getAll = async (req, res) => {
  const restaurants = await restaurantsModel
    .find({}, "-__v")
    .populate("dishes", "-__v")
    .populate("category", "-__v")
    .lean();
  res.status(200).json(restaurants);
};
