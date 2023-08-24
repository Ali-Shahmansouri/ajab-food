const categoriesModels = require("../models/Category");

exports.create = async (req, res) => {
  let { name } = req.body;

  const result = await categoriesModels.create({
    name,
    image : req.file.filename,
  });

  res.status(201).json({ message: "Category created successfully", result });
};
