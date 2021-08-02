const Order = require("../../models/Order");

const allOrders = async (req, res, next) => {
  const id = req.body.restaurant_id;
  try {
    const allorders = await Order.find({ restaurant_id: id });
    return res.json(allorders);
  } catch (error) {
    return res.json(error);
  }
};

const addOrder = async (req, res, next) => {
  const {
    buyer_name,
    buyer_email,
    food_name,
    food_amount,
    food_id,
    food_price,
    restaurant_id,
    request_utensils,
    delivery_instructions,
    sub_total,
    service,
    total,
    order_delivered,
    payment_method,
    paid,
    delivery_options,
  } = req.body;

  try {
    const newOrder = new Order({
      buyer_name,
      buyer_email,
      food_name,
      food_amount,
      food_id,
      food_price,
      restaurant_id,
      request_utensils,
      delivery_instructions,
      sub_total,
      service,
      total,
      order_delivered,
      payment_method,
      paid,
      delivery_options,
    });

    const newy = await newOrder.save();

    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports = { allOrders, addOrder };
