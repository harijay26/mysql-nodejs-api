
module.exports = appAuthor => {
    const authors = require("../controllers/authorController");

// Retrieve all Author
appAuthor.get("/authors", authors.findAll);

// Retrieve a single Author with AuthorId
appAuthor.get("/authors/:authorId", authors.findOne);


}