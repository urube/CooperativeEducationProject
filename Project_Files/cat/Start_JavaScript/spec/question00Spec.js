/* global describe beforeEach it expect Cattery CatOwner  */
describe('Basic Check For Original Source Code', () => {
  describe('Cattery', () => {
    let theCattery
    beforeEach(() => {
      theCattery = new Cattery()
    })
    describe('the allMyCatOwners property', () => {
      it('should have an .allMyCatOwners property', () => {
        expect(theCattery.hasOwnProperty('allMyCatOwners')).to.be.ok;
      })
      it('should reference an array', () => {
        expect(Array.isArray(theCattery.allMyCatOwners)).to.be.ok;
      })
    })

    it('should have an .addCatOwner function', () => {
      expect(typeof theCattery.addCatOwner).to.equal('function');
    })

    it('should have a .findCatOwner function', () => {
      expect(typeof theCattery.findCatOwner).to.equal('function');
    })
    it('should have a .sortCatOwners function', function () {
      expect(typeof theCattery.sortCatOwners).to.equal('function');
    })
  })

  describe('CatOwner', () => {
    var catOwner
    beforeEach(() => {
      catOwner = new CatOwner()
    })
    it('should have an .id property', () => {
      expect(catOwner.hasOwnProperty('id')).to.be.ok;
    })

    it('should have a .firstName property', () => {
      expect(catOwner.hasOwnProperty('firstName')).to.be.ok;
    })
    it('should have a .lastName property', () => {
      expect(catOwner.hasOwnProperty('lastName')).to.be.ok;
    })
    it('should have an .amountOwed property', () => {
      expect(catOwner.hasOwnProperty('amountOwed')).to.be.ok;
    })
    it('should have a .myCattery reference', function () {
      expect(catOwner.hasOwnProperty('myCattery')).to.be.ok;
    })

    describe('the allMyCats property', function () {
      it('should have an .allMyCats reference', function () {
        expect(catOwner.hasOwnProperty('allMyCats')).to.be.ok;
      })
      it('should reference an array', function () {
        expect(Array.isArray(catOwner.allMyCats)).to.be.ok;
      })
    })

    it('should have a .sortCats function', function () {
      expect(typeof catOwner.sortCats).to.equal('function');
    })
  })
})
