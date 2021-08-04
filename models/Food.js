const mongoose = require("mongoose");
const Restaurant = require("./Restaurant");

const FoodSchema = mongoose.Schema({
  name: {
    type: "String",
    required: true,
    unique: true,
  },
  price: {
    type: "String",
    required: true,
  },
  restaurant_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Restaurant",
    required: true,

    index: true,
  },
  img_url: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model("Food", FoodSchema);
