const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/addingbook');
const Schema = mongoose.Schema;

var newbookschema=new Schema({
    title: String,
    author: String,
    genre: String
});
var bookdata =mongoose.model('book-data',newbookschema);
module.exports=bookdata;