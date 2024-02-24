const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
app.use(cors());
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));

const PORT = process.env.PORT || 8081;

// get all products
router.get("/", async (req, res) => {
  try {
    const data = await knex("products");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving inventories data: ${error}`);
  }
});

// get one product
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await knex("products")
    .select(
      "products.product_id",
      "products.product_name",
      "products.ingredients",
      "products.description",
      "products.picture",
      "reviews.comment",
      "reviews.rating"
    )
    .join("reviews", "products.product_id", "=", "reviews.product_id")
    .where("products.product_id", productId)
    .first();
      // .where({ product_id: req.params.id })
    

    if (!product) {
      return res.status(404).json({
        message: `Product with ID ${req.params.id} not found`,
      });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve inventories data for ID ${req.params.id}`,
    });
  }
});

  // get reviews for a product
router.get("/:id/reviews", async (req, res) => {
    const productId = req.params.id;
     try {
      const data = await knex("reviews")
        .select(
          "reviews.review_id",
          "reviews.product_id",
          "reviews.user_name",
          "reviews.date",
          "reviews.rating",
          "reviews.comment"
        )
        .join("products", "reviews.product_id", "=", "products.product_id")
        .where("products.product_id", productId);
      if (data.length <= 0) {
        res.status(404).send("No such product id");
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(400).send(`Error retrieving inventory data: ${error}`);
    }
  });
  
  module.exports = router;