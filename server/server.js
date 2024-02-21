require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const home = require("./routes/home.js");
const dashboard = require("./routes/dashboard.js");

const PORT = process.env.PORT || 8081;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors());
app.use(express.json());

app.use("/api/home", home);
app.use("/api/dashboard", dashboard);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});