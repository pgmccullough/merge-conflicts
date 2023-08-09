const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
  res.status(204).json("the items endpoint is working.");
})

router.post("/",(req,res) => {
  res.json("the POST items endpoint");
})

module.exports = router;
