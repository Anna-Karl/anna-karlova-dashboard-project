const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
app.use(cors());
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));

const PORT = process.env.PORT || 8081;

router.get("/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      const data = await knex("sales")
        .select(
          "sales.transaction_id",
          "sales.product_id",
          "sales.product_name",
          "sales.date",
          "sales.day_part",
          "sales.day_type",
          "sales.quantity",
          "sales.unit_price",
          "sales.cost",
        )
        .where("sales.product_id", productId)
        .first();
      if (!data) {
        res.status(404).send({ error: "No such product id" });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(400).send(`Error retrieving inventory data: ${error}`);
    }
  });

router.get("/", async (req, res) => {
    try {
      const data = await knex("sales")
        .select(
            "sales.transaction_id",
            "sales.product_id",
            "sales.product_name",
            "sales.date",
            "sales.day_part",
            "sales.day_type",
            "sales.quantity",
            "sales.unit_price",
            "sales.cost",
        )
      res.status(200).json(data);
    } catch (error) {
      res.status(400).send(`Error retrieving inventory data: ${error}`);
    }
  });

  module.exports = router;