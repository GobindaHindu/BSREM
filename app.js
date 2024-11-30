//app.js

const dotenv = require ('dotenv');
// load config file
dotenv.config({path:'./config.env'}); 
const connectDB = require('./config/db')

const express= require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const morgan = require ('morgan');
const { engine } = require ('express-handlebars');
const passport = require ('./config/passport');
const session = require ('express-session');
const MongoStore =require ('connect-mongo');
const userRoutes = require('./route/sUser');
const contactRoute = require('./route/contactUser');




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Handlebars setup
app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongoUrl: process.env.MONGO_URI // Specify the MongoDB connection string
  })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Pass user info to all views
app.use((req, res, next) => {  
  res.locals.user = req.user || null; // If logged in, user data is available; otherwise, it's null
  next();
});

// Routes
app.use('/', require('./route/index'));
app.use('/auth', require('./route/auth'));
app.use('/surveyForm1', require('./route/dashboard', {layout: "surveyForm1"})); // Adjust path based on file location
app.use(userRoutes); // Survey users
app.use(contactRoute);





// Serve questionnaire HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});


connectDB();
// MongoDB connect
// mongoose.connect(uri).then(() => {
//   console.log('mongodb connected');
// }).catch(console.error);

const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${port}`);
});



