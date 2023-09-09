require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const gptRoutes = require("./Routes/gptRoutes");
app.use("/ai", gptRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {});
