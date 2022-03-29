const assert = require ('assert');
const Room = require ('../room.js')

describe('Room', function () {
    let room;

    beforeEach(function(){
        room = new Room (20);
    });

    it('should have an area in square meters', function () {
        const actual = room.area;
        assert.strictEqual(actual, 20)
    })
})