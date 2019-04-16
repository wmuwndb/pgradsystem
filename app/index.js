const express = require('express');
const morgan = require('morgan');

const { Database } = require('./database');

const app = express();
const port = +process.env.PORT || 3000;

app.use(morgan('combined'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});