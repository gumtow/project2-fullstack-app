// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const portfolioController = require('./controllers/portfolio.js');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use('/jgumtow', portfolioController);


// Mongoose Connection
mongoose.connect(MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

// Listen on Port
app.listen(PORT, ()=>{
    console.log('Listening on port', PORT);
})