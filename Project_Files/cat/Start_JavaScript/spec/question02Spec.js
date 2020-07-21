/* globals describe beforeEach Controller it expect  */
describe('Question Two', () => {
  describe('adding the four CatOwners', () => {
    let theCattery
    beforeEach(() => {
      theCattery = Controller.setup()
    })
    it('should have added 4 CatOwners', () => {
      expect(theCattery.allMyCatOwners.length).to.equal(4);
    })
    it('should have correctly set details for each CatOwner', () => {
      theCattery.sortCatOwners()
      let aCatOwner = theCattery.allMyCatOwners[0]
      expect(aCatOwner).not.to.be.undefined;
      expect(aCatOwner.id).to.equal('4');
      expect(aCatOwner.firstName).to.equal('Temepara');
      expect(aCatOwner.lastName).to.equal('Williams');
      expect(aCatOwner.amountOwed).to.equal(12.56);

      aCatOwner = theCattery.allMyCatOwners[1]
      expect(aCatOwner).not.to.be.undefined;
      expect(aCatOwner.id).to.equal('7');
      expect(aCatOwner.firstName).to.equal('Ruth');
      expect(aCatOwner.lastName).to.equal('George');
      expect(aCatOwner.amountOwed).to.equal(12.34);

      aCatOwner = theCattery.allMyCatOwners[2]
      expect(aCatOwner).not.to.be.undefined;
      expect(aCatOwner.id).to.equal('23');
      expect(aCatOwner.firstName).to.equal('Casey');
      expect(aCatOwner.lastName).to.equal('van Dyke');
      expect(aCatOwner.amountOwed).to.equal(34.56);

      aCatOwner = theCattery.allMyCatOwners[3]
      expect(aCatOwner).not.to.be.undefined;
      expect(aCatOwner.id).to.equal('165');
      expect(aCatOwner.firstName).to.equal('Irene');
      expect(aCatOwner.lastName).to.equal('Aitkin');
      expect(aCatOwner.amountOwed).to.equal(56.12);
    })
  })
})
