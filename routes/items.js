const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
  res.json("the items endpoint");
})

module.exports = router;