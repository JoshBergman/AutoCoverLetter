require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

const gptRoutes = require("./Routes/gptRoutes");
app.use("/ai", gptRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {});
