const mongoose = require("mongoose");
const Food = require("./Food");

const RestaurantSchema = mongoose.Schema(
  {
    username: {
      type: "String",
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    address: {
      type: "String",
    },
    openAt: {
      type: "String",
    },
    closesAt: {
      type: "String",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
