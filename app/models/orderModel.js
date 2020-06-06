const sql = require("./db.js");

// Constructor 
const Order = order => {

    this.Customer_ID = order.customerId;
    this.Product_ID = order.productId;
    this.Quantity = order.quantity;
    this.TotalAmount = order.totalAmount;
    this.Ship_date = order.shipDate;
}

Order.getAll = result => {
    sql.query("SELECT * FROM Orders", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("orders: ", res);
      result(null, res);
    });
  };


Order.findById = (orderId, result) => {
    sql.query(`SELECT * FROM Orders WHERE Order_number = ${orderId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found order: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null); // not found order with the id
    });
  };

  module.exports = Order;