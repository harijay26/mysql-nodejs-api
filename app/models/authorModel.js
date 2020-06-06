const sql = require("./db.js");

// Constructor 
const Author = author => {

    this.FirstName = author.firstName;
    this.LastName = author.lastName;
    this.Address = author.address;
    this.URL = author.url;
   
};


Author.getAll = result => {
    sql.query("SELECT * FROM Author", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("author: ", res);
      result(null, res);
    });
  };


Author.findById = (authorId, result) => {
    sql.query(`SELECT * FROM author WHERE id = ${authorId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Author: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null); // not found author with the id
    });
  };

  module.exports = Author;