const mongoose = require("mongoose");
const validator = require("validator");

const OrderSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  date: {
    type: String,
  },
  order_ref_no: {
    type: String,
  },
  product_Name:{
    type: String
  },
  product_Qty: {
    type: String,
  },
  grand_Total: {
    type: String,
  },
  payment_Status: {
    type: String,
  }

});

const Order = new mongoose.model("Order", OrderSchema);
module.exports = Order;
