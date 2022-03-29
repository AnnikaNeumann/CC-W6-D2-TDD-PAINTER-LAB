const PaintCan = function (amount) {
    this.amount = amount;
}

PaintCan.prototype.checkIfEmpty = function() {
    if (this.amount == 0) {
        return true;
    } else {
        return false;
    }
};

PaintCan.prototype.empty = function() {
    this.amount = 0;
};

module.exports = PaintCan;