const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
  res.json("the orders endpoint");
})

module.exports = router;