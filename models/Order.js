const mongoose = require("mongoose");
const Restaurant = require("./Restaurant");

const OrderSchema = mongoose.Schema(
  {
    buyer_name: {
      type: "String",
      required: true,
    },
    buyer_email: {
      type: "string",
      required: true,
    },
    food_name: {
      type: "String",
      required: true,
      unique: true,
    },
    food_amount: {
      type: "String",
    },
    food_id: {
      type: "String",
      required: true,
      unique: true,
    },
    food_price: {
      type: "String",
      required: true,
    },
    restaurant_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Restaurant",
      index: true,
    },
    request_utensils: {
      type: Boolean,
    },
    delivery_instructions: {
      type: "String",
    },
    sub_total: {
      type: "String",
      required: true,
    },
    service: {
      type: "String",
      required: true,
    },
    total: {
      type: "String",
      required: true,
    },

    order_delivered: { type: Boolean },
    payment_method: {
      type: "String",
    },
    paid: { type: Boolean },
    delivery_options: {
      type: "String",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
