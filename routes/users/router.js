const router = require("express").Router();
const { register, login } = require("./auth");

//auth
router.post("/register", register, (req, res) => {
  res.sendStatus(200);
});
router.post("/login", login, (req, res) => {
  res.json(req.user);
});

module.exports = router;
