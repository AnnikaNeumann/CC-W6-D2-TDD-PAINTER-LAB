const assert = require ('assert');
const PaintCan = require ('../paintCan.js')

describe('paintCan', function () {
    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(10);
    });

    it('should have amount of paint', function () {
        const actual = paintCan.amount
        assert.strictEqual(actual, 10)
    })
    it('should be able to check if it is empty', function () {
        const actual = paintCan.checkIfEmpty();
        assert.strictEqual(actual, false)
    })
    it('should be able to empty itself', function () {
        paintCan.empty();
        const actual = paintCan.checkIfEmpty();
        assert.strictEqual(actual, true)
    })
})