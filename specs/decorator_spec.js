const assert = require ('assert');
const Decorator = require ('../decorator.js')
const PaintCan = require ('../paintCan.js')

describe('Decorator', function() {
    let decorator;

    beforeEach(function(){
        decorator = new Decorator();
        paintCan1 = new PaintCan(10)
    });
    it('should start with empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [])
    })
    it('should be able to add a can of paint', function(){
        decorator.addPaint(paintCan1);
        const actual = decorator.paintStock();
        assert.deepStrictEqual(actual,[paintCan1])
    })
    it('should be able to calculate total amount of paint in stock', function() {
        decorator.addPaint(paintCan1);
        const actual = decorator.checkStockAmount();
        assert.strictEqual(actual, 10);
    })
})