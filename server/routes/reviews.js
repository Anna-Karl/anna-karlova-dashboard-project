const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
app.use(cors());
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));

const PORT = process.env.PORT || 8081;

router.get("/", async (req, res) => {
  try {
    const data = await knex("reviews")
      .select(
        "reviews.review_id",
        "reviews.product_id",     
        "reviews.user_name",
        "reviews.rating",
        "reviews.comment",
        "reviews.date",
        "products.picture as picture",
      )
      .join("products", "reviews.product_id", "=", "products.product_id")
      .orderBy("reviews.date", "desc");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving inventory data: ${error}`);
  }
});

  
  module.exports = router;