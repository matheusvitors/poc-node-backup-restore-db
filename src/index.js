const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log("API online on port " + port);
});
