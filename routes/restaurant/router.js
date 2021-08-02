const router = require("express").Router();
const { register, login } = require("./auth");
const { allOrders, addOrder } = require("./orders");
const {
  newFood,
  deleteFood,
  getFood,
  updateFood,
  getOneFood,
} = require("./menu");

//Authentication
router.post("/register", register, (req, res) => res.json("hello"));
router.post("/login", login, (req, res) => res.json(req.user));

//order routes
router.get("/orders", allOrders, (req, res) => {});

//menu routes
router.post("/addFood", newFood, (req, res) => {
  res.sendStatus(201);
});
router.delete("/deleteFood", deleteFood, (req, res) => {
  res.sendStatus(200);
});
router.get("/getFood", getFood, (req, res) => {});
router.put("/updateFood", updateFood, (req, res) => {});
router.get("/getOneFood", getOneFood, (req, res) => {});

//tests
router.post("/addOrder", addOrder, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
