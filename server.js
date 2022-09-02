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

const helpers = require('./utils/auth');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./Controllers/api/user-routes'));

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Big Brother is now Listening!'))
})

// const express = require('express');
// const routes = require('./Controllers');
// const sequelize = require('./config/connection');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // turn on routes
// app.use(routes);

// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });