const router = require("express").Router();
const { register, login } = require("./auth");
const { cart } = require("./cart");

//auth
router.post("/register", register, (req, res) => {
  res.json("hello");
});
router.post("/login", login, (req, res) => {
  res.json(req.user);
});

router.post("/addToCart", cart, (req, res) => {});

module.exports = router;
