const Author = require("../models/authorModel");

// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
    Author.getAll((err, data) => {
        if (err)
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving Authors."
          });
          else res.send(data);
    });
  };
  
  // Find a single Author with a authorId
  exports.findOne = (req, res) => {
    Author.findById(req.params.authorId, (err, data) => {
      if (err) {
          if (err.kind === "not_found") {
              res.status(404).send({
                  message: `Not found Author with id ${req.params.authorId}.`
              });
          } else {
              res.status(500).send({
                  message: "Error retrieving Author with id " + req.params.authorId
              });
          }
      } else res.send(data);
    });
  };