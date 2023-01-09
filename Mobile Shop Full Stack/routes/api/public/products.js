var express = require("express");
var router = express.Router();
var Mobile = require("../../../models/Mobile");

router.get("/", async function (req, res, next) {
  console.log("inside");
  setTimeout(async () => {
    let products = await Mobile.find();

    res.send(products);
  }, 5000);
});
module.exports = router;
