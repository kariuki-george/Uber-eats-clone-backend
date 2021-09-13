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
    transit,
    cancelled,
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
      transit,
      cancelled,
    });

    const order = await Order.find({
      buyer_name,
      food_name,
    });

    if (order.length === 0) {
      const neworder = await newOrder.save();
      console.log(neworder);
      return res.json(neworder);
    } else {
      const updatedOrder = await Order.findByIdAndUpdate(
        order[0]._id,
        {
          food_amount,
        },
        { new: true }
      );

      return res.json(updatedOrder);
    }
  } catch (error) {
    res.json(error);
  }
};
const updateOrder = async (req, res, next) => {
  const {
    id,

    request_utensils,
    delivery_instructions,
    sub_total,
    service,
    total,
    order_delivered,
    payment_method,

    delivery_options,
    transit,
    cancelled,
  } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        request_utensils,
        delivery_instructions,
        sub_total,
        service,
        total,
        order_delivered,
        payment_method,

        delivery_options,
        transit,
        cancelled,
      },
      { new: true }
    );

    return res.json(updatedOrder);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { allOrders, addOrder, updateOrder };
