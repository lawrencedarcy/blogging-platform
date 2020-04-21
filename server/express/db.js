const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@stagetime-bs3vr.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true }, err => {
  if (err) console.log(err); // eslint-disable-line
  else console.log('mongoose connected!'); // eslint-disable-line
});

module.exports = mongoose;
