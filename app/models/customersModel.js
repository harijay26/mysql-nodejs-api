
const sql = require("./db.js");

// Constructor
const Customer = customer => {

    this.FirstName = customer.firstName;
    this.LastName = customer.lastName;
    this.Street = customer.street;
    this.City = customer.city;
    this.Zip = customer.zip;
    this.Phone = customer.phone;
    this.Email = customer.email;
};

Customer.getAll = result => {
    sql.query("SELECT * FROM Customers", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("customers: ", res);
      result(null, res);
    });
  };


Customer.findById = (customerId, result) => {
    sql.query(`SELECT * FROM Customers WHERE id = ${customerId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null); // not found Customer with the id
    });
  };

  module.exports = Customer;