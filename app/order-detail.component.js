"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var order_service_1 = require('./services/order.service');
var OrderDetailComponent = (function () {
    function OrderDetailComponent(orderService) {
        this.orderService = orderService;
    }
    OrderDetailComponent.prototype.getCurrentOrder = function () {
        var _this = this;
        this.orderService.getCurrentOrder().then(function (order) { return _this.currentOrder = order; });
    };
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.getCurrentOrder();
    };
    OrderDetailComponent = __decorate([
        core_1.Component({
            selector: 'tingcom-order',
            templateUrl: 'app/order-detail.component.html',
            providers: [order_service_1.OrderService]
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order-detail.component.js.map