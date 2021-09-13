const router = require("express").Router();
const { register, login } = require("./auth");
const { allOrders, addOrder, updateOrder } = require("./orders");
const {
  newFood,
  deleteFood,
  getFood,
  updateFood,
  getOneFood,
} = require("./menu");
const { getRestaurants, getRestaurant } = require("./restaurants");

//Authentication
router.post("/register", register, (req, res) => res.json("hello"));
router.post("/login", login, (req, res) => res.json(req.user));

//order routes
router.post("/orders", allOrders, (req, res) => {});
router.post("/addOrder", addOrder, (req, res) => {});
router.post("/updateOrder", addOrder, (req, res) => {});

//menu routes
router.post("/addFood", newFood, (req, res) => {});
router.post("/deleteFood", deleteFood, (req, res) => {});
router.post("/getFood", getFood, (req, res) => {});
router.put("/updateFood", updateFood, (req, res) => {});
router.get("/getOneFood", getOneFood, (req, res) => {});

//restaurants
router.get("/getRestaurants", getRestaurants, (req, res) => {});
router.post("/getRestaurant", getRestaurant, (req, res) => {});

module.exports = router;
