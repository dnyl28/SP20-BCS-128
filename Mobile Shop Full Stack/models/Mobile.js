const mongoose = require("mongoose");
const mobileSchema = mongoose.Schema({
  name: String,
  price: Number,
  color: String,
  storage: Number,
  description: String,
  image: String,
});
const Mobile = mongoose.model("Mobile", mobileSchema);
module.exports = Mobile;
