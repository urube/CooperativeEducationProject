/* global describe beforeEach it expect Club Member */
describe('Basic Check For Original Source Code', () => {
  describe('Club', () => {
    var theClub
    beforeEach(() => {
      theClub = new Club()
    })

    describe('the allMyMembers property', () => {
      it('should have an .allMyMembers property', () => {
        expect(theClub.hasOwnProperty('allMyMembers')).toBeTruthy()
      })

      it('should reference an array', () => {
        expect(Array.isArray(theClub.allMyMembers)).toBeTruthy()
      })
    })

    it('should have an .addMember function', () => {
      expect(typeof theClub.addMember).toBe('function')
    })

    it('should have an .findMember function', () => {
      expect(typeof theClub.findMember).toBe('function')
    })

    it('should have an .sortMembers function', () => {
      expect(typeof theClub.sortMembers).toBe('function')
    })
  })

  describe('Member', () => {
    var aMember
    beforeEach(() => {
      aMember = new Member()
    })

    it('should have an .id property', () => {
      expect(aMember.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .firstName property', () => {
      expect(aMember.hasOwnProperty('firstName')).toBeTruthy()
    })

    it('should have a .lastName property', () => {
      expect(aMember.hasOwnProperty('lastName')).toBeTruthy()
    })

    it('should have a .birthDate property', () => {
      expect(aMember.hasOwnProperty('birthDate')).toBeTruthy()
    })

    describe('the allMyActivities property', () => {
      it('should have an .allMyActivities reference', () => {
        expect(aMember.hasOwnProperty('allMyActivities')).toBeTruthy()
      })

      it('should reference an array', () => {
        expect(Array.isArray(aMember.allMyActivities)).toBeTruthy()
      })
    })

    it('should have a .sortActivities function', () => {
      expect(typeof aMember.sortActivities).toBe('function')
    })
  })
})
