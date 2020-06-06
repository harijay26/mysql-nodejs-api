
module.exports = appOrder => {
    const orders = require("../controllers/orderController");

// Retrieve all Order
appOrder.get("/orders", orders.findAll);

// Retrieve a single Order with OrderId
appOrder.get("/orders/:orderId", orders.findOne);


}