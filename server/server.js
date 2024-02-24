require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./routes/products.js");
const dashboard = require("./routes/dashboard.js");
const reviews = require("./routes/reviews.js");

const PORT = process.env.PORT || 8081;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use("/api/products", products);
app.use("/api/reviews", reviews);
app.use("/api/dashboard", dashboard);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});