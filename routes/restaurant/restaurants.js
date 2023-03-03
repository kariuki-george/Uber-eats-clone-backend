const Restaurant = require("../../models/Restaurant");

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();

    return res.json(restaurants);
  } catch (error) {
    res.json(error);
  }
};

const getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.body.restaurant_id);

    return res.json(restaurant);
  } catch (error) {
    res.json("Errorr");
  }
};

module.exports = { getRestaurants, getRestaurant };
