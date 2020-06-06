const sql = require("./db.js");

// Constructor 
const Book = book => {

    this.Auth_id = book.authId;
    this.Pub_id = book.pubId;
    this.Title = book.title;
    this.Genre = book.genre;
    this.Published_Year = book.pubYear;  
};


Book.getAll = result => {
    sql.query("SELECT * FROM Books", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("orders: ", res);
      result(null, res);
    });
  };


Book.findById = (bookId, result) => {
    sql.query(`SELECT * FROM books WHERE id = ${bookId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found book: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null); // not found book with the id
    });
  };

  module.exports = Book;