const User = require("../../models/User");

const register = async (req, res, next) => {
  const { email, password, name } = req.body;

  const newRestaurant = new User({
    email: email,
    password: password,
    username: name,
  });

  try {
    await newRestaurant.save();

    next();
  } catch (err) {
    const error = err.keyValue;
    console.log(error);
    return res.json(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const restaurant = await User.findOne({ email: email });

    if (!restaurant) return res.json("User not found");
    if (password !== restaurant.password)
      return res.json("Wrong email or password");
    req.user = restaurant;
    next();
  } catch (error) {
    return res.json("error");
  }
};

module.exports = { register, login };
