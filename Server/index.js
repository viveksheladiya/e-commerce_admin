const express = require('express');
const cors = require('cors');
const path = require('path');
require('./Database/Connection');

const router = require("./routes/index");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use(express.static('images'))

app.listen(8080);