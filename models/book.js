const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    img: {type: String, require: false},
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: false },
  link: {type: String}
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
