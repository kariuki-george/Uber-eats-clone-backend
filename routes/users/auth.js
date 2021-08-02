const User = require("../../models/User");

const register = async (req, res, next) => {
  const { email, password, username } = req.body;
  const newUser = new User({
    email: email,
    password: password,
    username: username,
  });
  console.log(newUser);
  try {
    await newUser.save();

    next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) return res.json("User not found");
    if (password !== user.password) return res.json("Wrong email or password");
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { register, login };
