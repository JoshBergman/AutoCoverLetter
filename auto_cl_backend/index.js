require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "https://autocl-abb1d.web.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());

const gptRoutes = require("./Routes/gptRoutes");
app.use("/ai", gptRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {});
