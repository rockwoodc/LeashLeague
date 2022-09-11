const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/loginconnection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'My name is Inigo Montoya, you killed my father; PREPARE TO DIE',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Linking any helpers from our auth.js file
const helpers = require('./utils/auth');

// Creating handlebars as a view engine for express
const hbs = exphbs.create({ helpers });

// setting our view engine as handlebars
app.engine('handlebars', hbs.engine);

// Allows view engine to use handlebars as html
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./Controllers/api/user-routes'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Big Brother is now Listening!'))
});

// app.get('/', function (req, res) {
//   res.render('login');
// });