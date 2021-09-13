const User = require("../../models/User");
const Restaurant = require("../../models/Restaurant");

const getRestaurant = async (restaurant_id) => {
  try {
    return await Restaurant.findById(restaurant_id);
  } catch (error) {
    return "Server error";
  }
};

const cart = async (req, res, next) => {
  const { user_id, food_amount, restaurant_id, food_id, cart  , food_name, food_price} = req.body;


  const restaurant = await getRestaurant(restaurant_id);

  if (restaurant === "error") {
    return "Server error";
  }

  const { username } = restaurant;

  const present = cart.find((order) => order.food_id === food_id);

  if (present) {
    cart.forEach((order) => {
    
      if (order.food_id === food_id) {
        order.food_amount = food_amount;
      }
    });
  } else {
    cart.push({
      user_id,
      food_amount,
      restaurant_id,
      restaurant_name: username,
      food_id,
      food_name, food_price
    });
  }

  try {
     await User.findByIdAndUpdate(
      user_id,
      {
        $set: { cart: cart },
      },
      {
        new: true,
      }
    );
    const updated = await User.findById(user_id)
    
    
    return res.json(updated.cart);
  } catch (error) {
    return res.json("Server error.");
  }
};

module.exports = { cart };
