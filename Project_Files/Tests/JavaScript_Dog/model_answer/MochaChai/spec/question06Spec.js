/* globals describe beforeEach it expect DogOwner  */
describe('Question Six', () => {
  'use strict'
  describe('DogOwner.hasOneDog function', () => {
    let aDogOwner
    beforeEach(() => {
      aDogOwner = new DogOwner()
    })

    it('should exist', () => {
      expect(aDogOwner.hasOneDog).not.to.be.undefined;
    })

    it('should return a boolean', () => {
      expect(typeof aDogOwner.hasOneDog()).to.equal('boolean');
    })

    it('should return false if the number of Dog that person owns is equal two.', () => {
      aDogOwner = new DogOwner('tao', null, null, null, null)
      aDogOwner.addDog(null, null, null, null)
      aDogOwner.addDog(null, null, null, null)
      expect(aDogOwner.hasOneDog()).to.equal(false);
    })

    it('should return true if the number of Dog that person owns is less than two.', () => {
      aDogOwner = new DogOwner('tao', null, null, null, null)
      aDogOwner.addDog(null, null, null, null)
      expect(aDogOwner.hasOneDog()).to.equal(true);
    })

    it('should return false if the number of Dog that person owns is more than two.', () => {
      aDogOwner = new DogOwner('tao', null, null, null, null)
      aDogOwner.addDog(null, null, null, null)
      aDogOwner.addDog(null, null, null, null)
      aDogOwner.addDog(null, null, null, null)
      expect(aDogOwner.hasOneDog()).to.equal(false);
    })
  })
})
