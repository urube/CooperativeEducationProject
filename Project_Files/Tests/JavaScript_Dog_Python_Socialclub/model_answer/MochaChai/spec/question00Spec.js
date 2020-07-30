/* global describe beforeEach it expect Kennel DogOwner  */
describe('Basic Check For Original Source Code', () => {
  describe('Kennel', () => {
    let theKennel
    beforeEach(() => {
      theKennel = new Kennel()
    })
    describe('the allMyDogOwners property', () => {
      it('should have an .allMyDogOwners property', () => {
        expect(theKennel.hasOwnProperty('allMyDogOwners')).to.be.ok;
      })
      it('should reference an array', () => {
        expect(Array.isArray(theKennel.allMyDogOwners)).to.be.ok;
      })
    })

    it('should have an .addDogOwner function', () => {
      expect(typeof theKennel.addDogOwner).to.equal('function');
    })

    it('should have a .findDogOwner function', () => {
      expect(typeof theKennel.findDogOwner).to.equal('function');
    })
    it('should have a .sortDogOwners function', function () {
      expect(typeof theKennel.sortDogOwners).to.equal('function');
    })
  })

  describe('DogOwner', () => {
    var dogOwner
    beforeEach(() => {
      dogOwner = new DogOwner()
    })
    it('should have an .id property', () => {
      expect(dogOwner.hasOwnProperty('id')).to.be.ok;
    })

    it('should have a .firstName property', () => {
      expect(dogOwner.hasOwnProperty('firstName')).to.be.ok;
    })
    it('should have a .lastName property', () => {
      expect(dogOwner.hasOwnProperty('lastName')).to.be.ok;
    })
    it('should have an .amountOwed property', () => {
      expect(dogOwner.hasOwnProperty('birthDate')).to.be.ok;
    })
    it('should have a .myKennel reference', function () {
      expect(dogOwner.hasOwnProperty('myKennel')).to.be.ok;
    })

    describe('the allMyDogs property', function () {
      it('should have an .allMyDogs reference', function () {
        expect(dogOwner.hasOwnProperty('allMyDogs')).to.be.ok;
      })
      it('should reference an array', function () {
        expect(Array.isArray(dogOwner.allMyDogs)).to.be.ok;
      })
    })

    it('should have a .sortDogs function', function () {
      expect(typeof dogOwner.sortDogs).to.equal('function');
    })
  })
})
