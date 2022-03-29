const Decorator = function (){
    this.paintStock = [];
}

Decorator.prototype.addPaint = function (paintCan) {
    this.paintStock.push(paintCan);
}

Decorator.prototype.checkStockAmount = function () {
    let totalPaint = 0
    for (paintCan of this.paintStock) {
        paintCan.amount += totalPaint;
    };
    return totalPaint
}

module.exports = Decorator;