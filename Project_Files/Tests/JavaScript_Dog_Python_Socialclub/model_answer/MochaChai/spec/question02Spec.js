/* globals describe beforeEach Controller it expect  */
describe('Question Two', () => {
  describe('adding the four DogOwners', () => {
    let theKennel
    beforeEach(() => {
      theKennel = Controller.setup()
    })
    it('should have added 4 DogOwners', () => {
      expect(theKennel.allMyDogOwners.length).to.equal(4);
    })
    it('should have correctly set details for each DogOwner', () => {
      theKennel.sortDogOwners()
      let aDogOwner = theKennel.allMyDogOwners[0]
      expect(aDogOwner).not.to.be.undefined;
      expect(aDogOwner.id).to.equal('BMC');
      expect(aDogOwner.firstName).to.equal('Brad');
      expect(aDogOwner.lastName).to.equal('McCaw');
      expect(aDogOwner.birthDate).to.deep.equal(new Date(1982, 11, 12));

      aDogOwner = theKennel.allMyDogOwners[1]
      expect(aDogOwner).not.to.be.undefined;
      expect(aDogOwner.id).to.equal('RTH');
      expect(aDogOwner.firstName).to.equal('Richie');
      expect(aDogOwner.lastName).to.equal('Thorn');
      expect(aDogOwner.birthDate).to.deep.equal(new Date(1980, 4, 8));

      aDogOwner = theKennel.allMyDogOwners[2]
      expect(aDogOwner).not.to.be.undefined;
      expect(aDogOwner.id).to.equal('DEL');
      expect(aDogOwner.firstName).to.equal('Dan');
      expect(aDogOwner.lastName).to.equal('Ellis');
      expect(aDogOwner.birthDate).to.deep.equal(new Date(1984, 1, 16));

      aDogOwner = theKennel.allMyDogOwners[3]
      expect(aDogOwner).not.to.be.undefined;
      expect(aDogOwner.id).to.equal('ACR');
      expect(aDogOwner.firstName).to.equal('Andrew');
      expect(aDogOwner.lastName).to.equal('Carter');
      expect(aDogOwner.birthDate).to.deep.equal(new Date(1987, 10, 30));
    })
  })
})
