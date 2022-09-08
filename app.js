const express = require('express');
const catRoutes = require('./routes/catlog')

const app = express();

app.use("/cat",catRoutes);

app.listen(8080)