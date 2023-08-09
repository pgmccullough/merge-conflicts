const express = require("express");
const app = express();
const path = require("path");
const itemsRoute = require("./routes/items");
const ordersRoute = require("./routes/orders");

require("dotenv").config();

const { PORT } = process.env

app.get("/",(_req,res) => {
  res.status(200).sendFile(path.join(__dirname, './data/docs.html')); 
})

app.use("/items", itemsRoute);
app.use("/orders", ordersRoute);

app.listen(PORT, () => {
  console.log(`running on port ${ PORT || 8080 }`);
})