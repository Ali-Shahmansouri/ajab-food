const dishesModel = require("../models/Dish");
//TODO: Require Validators here ...

exports.create = async (req, res) => {
  //TODO: Implement validators
  let { name, shortDescription, price } = req.body;
  const result = await dishesModel.create({
    name,
    shortDescription,
    price: Number(price),
    image: req.file.filename,
  });
  res.status(201).json({
    message: "Dish created successfully",
    result,
  });
};

exports.getAll = async (req, res) => {
  const result = await dishesModel.find({}, "-__v").lean();
  res.status(200).json(result);
};
