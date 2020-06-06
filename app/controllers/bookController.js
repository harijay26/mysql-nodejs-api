const Book = require("../models/bookModel");

// Retrieve all Book from the database.
exports.findAll = (req, res) => {
    Book.getAll((err, data) => {
        if (err)
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving books."
          });
          else res.send(data);
    });
  };
  
  // Find a single Books with a bookId
  exports.findOne = (req, res) => {
    Book.findById(req.params.bookId, (err, data) => {
      if (err) {
          if (err.kind === "not_found") {
              res.status(404).send({
                  message: `Not found Book with id ${req.params.bookId}.`
              });
          } else {
              res.status(500).send({
                  message: "Error retrieving Book with id " + req.params.bookId
              });
          }
      } else res.send(data);
    });
  };