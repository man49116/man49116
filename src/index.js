const path = require('path');
const express = require('express');
const morgan = require('morgan');

const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routers');

const db = require('./config/db');

// connect DB

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//Http logger
// app.use(morgan('combined'));

//tempale engine
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
  }),
);

route(app);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
