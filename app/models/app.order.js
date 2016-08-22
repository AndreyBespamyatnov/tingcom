"use strict";
var Order = (function () {
    function Order(id, productName, imagePath, price, quantity) {
        this.id = id;
        this.productName = productName;
        this.imagePath = imagePath;
        this.price = price;
        this.quantity = quantity;
    }
    Order.prototype.subtotal = function () {
        return this.price * this.quantity;
    };
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=app.order.js.map