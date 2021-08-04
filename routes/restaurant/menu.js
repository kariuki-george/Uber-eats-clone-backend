const Food = require("../../models/Food");

const newFood = async (req, res, next) => {
  const { name, price, restaurant_id, img_url } = req.body;
  try {
    const newfood = new Food({
      name,
      price,
      restaurant_id,
      img_url,
    });
    await newfood.save();
    next();
  } catch (error) {
    res.json(error);
  }
};

const deleteFood = async (req, res, next) => {
  const { id } = req.body;
  try {
    await Food.findByIdAndDelete(id);
    next();
  } catch (error) {
    res.json(error);
  }
};

const getFood = async (req, res, next) => {
  const id = req.body.restaurant_id;

  try {
    const list = await Food.find({ restaurant_id: id });
    res.json(list.reverse());
    next();
  } catch (error) {
    res.json(error);
  }
};

const updateFood = async (req, res, next) => {
  const { name, price, id } = req.body;

  try {
    const updatedFood = await Food.findByIdAndUpdate(
      id,
      { name, price },
      { new: true }
    );
    res.json("update successful");
    next();
  } catch (error) {}
};

const getOneFood = async (req, res, next) => {
  const { id } = req.body;
  console.log(id);

  try {
    const food = await Food.findOne({ _id: id });
    console.log(food);
    if (!food) return res.json("food not found");
    console.log(food);
    return res.json(food);
    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports = { newFood, deleteFood, getFood, updateFood, getOneFood };
