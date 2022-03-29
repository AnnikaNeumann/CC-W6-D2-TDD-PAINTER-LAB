const Room = function (area) {
    this.area = area;
    this.amountPainted = 0
}

Room.prototype.addPaint = function (paint) {
    this.amountPainted += paint
}


module.exports = Room;