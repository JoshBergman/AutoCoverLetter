require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const gptRoutes = require("./Routes/gptRoutes");
app.use("/ai", gptRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("App running on port: " + port);
});
