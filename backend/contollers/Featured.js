const featuredsModel = require("../models/Featured");

exports.create = async (req, res) => {
  let { title, shortDescription, restaurants } = req.body;
  const result = await featuredsModel.create({
    title,
    shortDescription,
    restaurants,
  });

  res.status(201).json({ message: "Featured created successfully", result });
};

exports.getAll = async (req, res) => {
  const featureds = await featuredsModel
    .find({}, "-__v")
    .populate("restaurants", "-__v")
    .populate({
      path: "restaurants",
      populate: [
        {
          path: "category",
          model: "Categories",
        },
        {
          path: "dishes",
          model: "Dishes",
        },
      ],
    })

    // .populate("category", "-__v")
    // .populate("dishes", "-__v")
    .lean();
  res.status(200).json(featureds);
};
