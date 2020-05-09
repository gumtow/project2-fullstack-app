// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const portfolioSchema = new Schema({
    title: {type:String, required:true},
    img: {type:String, required:true, default:"/img/gd-favicon.png"},
    description: String, 
    link:{type:String, show:true},
    tags: Array,
    rating:Number,
    show:Boolean
}, {timestamps:true});

// Create Model
const Portfolio = mongoose.model('Porfolio', portfolioSchema);

// Export
module.exports = Portfolio;