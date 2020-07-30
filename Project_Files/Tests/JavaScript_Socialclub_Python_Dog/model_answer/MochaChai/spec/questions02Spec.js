/* globals describe beforeEach Controller it expect */
describe('Question Two', () => {
  describe('adding the five Members', () => {
    var theClub
    beforeEach(() => {
      theClub = Controller.setup()
    })

    it('should have 5 Members', () => {
      expect(theClub.allMyMembers.length).to.equal(5);
    })

    it('should have correctly set details for each Member', () => {
      var aMember
      aMember = theClub.allMyMembers[0]
      expect(aMember).not.to.be.undefined;
      expect(aMember.id).to.equal('M02');
      expect(aMember.firstName).to.equal('Mary');
      expect(aMember.lastName).to.equal('Shelly');
      expect(aMember.birthDate).to.deep.equal(new Date(1981, 0, 17));

      aMember = theClub.allMyMembers[1]
      expect(aMember).not.to.be.undefined;
      expect(aMember.id).to.equal('M04');
      expect(aMember.firstName).to.equal('Melvin');
      expect(aMember.lastName).to.equal('Dean');
      expect(aMember.birthDate).to.deep.equal(new Date(2000, 7, 8));

      aMember = theClub.allMyMembers[2]
      expect(aMember).not.to.be.undefined;
      expect(aMember.id).to.equal('M05');
      expect(aMember.firstName).to.equal('Jim');
      expect(aMember.lastName).to.equal('Beam');
      expect(aMember.birthDate).to.deep.equal(new Date(1980, 11, 27));

      aMember = theClub.allMyMembers[3]
      expect(aMember).not.to.be.undefined;
      expect(aMember.id).to.equal('M01');
      expect(aMember.firstName).to.equal('Carla');
      expect(aMember.lastName).to.equal('Main');
      expect(aMember.birthDate).to.deep.equal(new Date(1980, 6, 11));

      aMember = theClub.allMyMembers[4]
      expect(aMember).not.to.be.undefined;
      expect(aMember.id).to.equal('M03');
      expect(aMember.firstName).to.equal('James');
      expect(aMember.lastName).to.equal('Bean');
      expect(aMember.birthDate).to.deep.equal(new Date(2001, 7, 15));
     
      
    })
  })
})