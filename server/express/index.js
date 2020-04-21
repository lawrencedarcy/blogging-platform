const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../next/.next'));
}

app.listen(port, () => console.log(`Server listening at ${port}`)); //eslint-disable-line
