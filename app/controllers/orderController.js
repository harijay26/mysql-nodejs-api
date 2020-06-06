const Order = require("../models/orderModel");

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
    Order.getAll((err, data) => {
        if (err)
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving orders."
          });
          else res.send(data);
    });
  };
  
  // Find a single Order with a customerId
  exports.findOne = (req, res) => {
    Order.findById(req.params.orderId, (err, data) => {
      if (err) {
          if (err.kind === "not_found") {
              res.status(404).send({
                  message: `Not found Order with id ${req.params.orderId}.`
              });
          } else {
              res.status(500).send({
                  message: "Error retrieving Order with id " + req.params.orderId
              });
          }
      } else res.send(data);
    });
  };