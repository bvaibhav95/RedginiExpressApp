var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  userId: { type: String, required: true },
  cart: { type: Object, required: true },
  msgOnCake: { type: String },
  refCode: { type: String },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPhone: { type: String, required: true },
  userAddressLine1: { type: String, required: true },
  userAddressLine2: { type: String, required: true },
  userAddressLine3: { type: String, required: true },
  userCity: { type: String, required: true },
  userState: { type: String, required: true },

  delDate: { type: String, required: true },
  delTime: { type: String, required: true },

  payMode: { type: String, required: true },

  txnId: { type: String, required: true }
});

module.exports = mongoose.model("Order", orderSchema);
