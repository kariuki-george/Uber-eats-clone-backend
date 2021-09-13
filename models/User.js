const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: "String",
      required: true,
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
    cart: [
      {
        user_id: mongoose.Schema.ObjectId,
        restaurant_id: mongoose.Schema.ObjectId,
        restaurant_name: "String",
        food_amount: "String",
        food_id: mongoose.Schema.ObjectId,
        food_name:"String", food_price:"String"
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
