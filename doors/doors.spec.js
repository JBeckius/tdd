/*
100 doors in a row are all initially closed. You make
100 passes by the doors. The first time through, you
visit every door and toggle the door (if the door is
closed, you open it; if it is open, you close it).
The second time you only visit every 2nd door (door
#2, #4, #6, ...). The third time, every 3rd door
(door #3, #6, #9, ...), etc, until you only visit
the 100th door.

Question: What state are the doors in after the last
pass? Which are open, which are closed?
*/
describe('100 doors function test: ', function() {
  describe('the array of doors', function() {
    it('should contain 100 doors', function() {
      expect(manyDoors(0).length).toBe(100);
    })
  })

  describe('each door', function() {
    it('should be closed at start', function() {
      var array = manyDoors(0);
      expect(array[0]).toBe(false);
      expect(array[99]).toBe(false);
    })
  })

  describe('After the first pass:', function() {
    var array = manyDoors(1)
    describe('each door', function() {
      it('should be closed after pass', function() {

        expect(array[0]).toBe(true);
        expect(array[99]).toBe(true);
      })
    })
  })
  describe('After the second pass:', function() {
    var array = manyDoors(2);
    describe('every even door', function() {
      it('should be closed', function() {

        expect(array[1]).toBe(false);
        expect(array[99]).toBe(false);
      })
    })
    describe('every odd door', function() {
      it('should be open', function() {
        expect(array[0]).toBe(true);
        expect(array[2]).toBe(true);
      })
    })
  })
  describe('After the third pass:', function() {
    var array = manyDoors(3);
    describe('the third door', function() {
      it('should be closed', function() {
        expect(array[2]).toBe(false);
      })
    })
  })
  describe('the door toggle function', function() {
    it('should return true when input is false', function() {
      expect(toggleDoor(false)).toBe(true);
    })
    it('should return false when input is true', function() {
      expect(toggleDoor(true)).toBe(false);
    })
  })
})
