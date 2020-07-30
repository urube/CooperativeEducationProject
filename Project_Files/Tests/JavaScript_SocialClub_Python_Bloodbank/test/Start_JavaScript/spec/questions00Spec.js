/* global describe beforeEach it expect Club Member */
describe('Basic Check For Original Source Code', () => {
  describe('Club', () => {
    var theClub
    beforeEach(() => {
      theClub = new Club()
    })

    describe('the allMyMembers property', () => {
      it('should have an .allMyMembers property', () => {
        expect(theClub.hasOwnProperty('allMyMembers')).to.be.ok;
      })

      it('should reference an array', () => {
        expect(Array.isArray(theClub.allMyMembers)).to.be.ok;
      })
    })

    it('should have an .addMember function', () => {
      expect(typeof theClub.addMember).to.equal('function');
    })

    it('should have an .findMember function', () => {
      expect(typeof theClub.findMember).to.equal('function');
    })

    it('should have an .sortMembers function', () => {
      expect(typeof theClub.sortMembers).to.equal('function');
    })
  })

  describe('Member', () => {
    var aMember
    beforeEach(() => {
      aMember = new Member()
    })

    it('should have an .id property', () => {
      expect(aMember.hasOwnProperty('id')).to.be.ok;
    })

    it('should have a .firstName property', () => {
      expect(aMember.hasOwnProperty('firstName')).to.be.ok;
    })

    it('should have a .lastName property', () => {
      expect(aMember.hasOwnProperty('lastName')).to.be.ok;
    })

    it('should have a .birthDate property', () => {
      expect(aMember.hasOwnProperty('birthDate')).to.be.ok;
    })

    describe('the allMyActivities property', () => {
      it('should have an .allMyActivities reference', () => {
        expect(aMember.hasOwnProperty('allMyActivities')).to.be.ok;
      })

      it('should reference an array', () => {
        expect(Array.isArray(aMember.allMyActivities)).to.be.ok;
      })
    })

    it('should have a .sortActivities function', () => {
      expect(typeof aMember.sortActivities).to.equal('function');
    })
  })
})
