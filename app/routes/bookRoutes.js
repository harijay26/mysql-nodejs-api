
module.exports = appBook => {
    const books = require("../controllers/bookController");

// Retrieve all Book
appBook.get("/books", books.findAll);

// Retrieve a single Book with BookId
appBook.get("/books/:bookId", books.findOne);


}