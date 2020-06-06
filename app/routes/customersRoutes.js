
module.exports = app => {
    const customers = require("../controllers/customersController");

// Retrieve all Customers
app.get("/customers", customers.findAll);

// Retrieve a single Customer with customerId
app.get("/customers/:customerId", customers.findOne);


}



