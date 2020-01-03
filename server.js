const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const config = require('./config/index');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

//require('./models');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});