/* globals describe beforeEach Controller it expect */
describe('Question Two', () => {
  describe('adding the five Members', () => {
    var theClub
    beforeEach(() => {
      theClub = Controller.setup()
    })

    it('should have 5 Members', () => {
      expect(theClub.allMyMembers.length).toBe(5)
    })

    it('should have correctly set details for each Member', () => {
      var aMember
      aMember = theClub.allMyMembers[0]
      expect(aMember).toBeDefined()
      expect(aMember.id).toBe('M02')
      expect(aMember.firstName).toBe('Mary')
      expect(aMember.lastName).toBe('Shelly')
      expect(aMember.birthDate).toEqual(new Date(1981, 0, 17))

      aMember = theClub.allMyMembers[1]
      expect(aMember).toBeDefined()
      expect(aMember.id).toBe('M04')
      expect(aMember.firstName).toBe('Melvin')
      expect(aMember.lastName).toBe('Dean')
      expect(aMember.birthDate).toEqual(new Date(2000, 7, 8))

      aMember = theClub.allMyMembers[2]
      expect(aMember).toBeDefined()
      expect(aMember.id).toBe('M05')
      expect(aMember.firstName).toBe('Jim')
      expect(aMember.lastName).toBe('Beam')
      expect(aMember.birthDate).toEqual(new Date(1980, 11, 27))

      aMember = theClub.allMyMembers[3]
      expect(aMember).toBeDefined()
      expect(aMember.id).toBe('M01')
      expect(aMember.firstName).toBe('Carla')
      expect(aMember.lastName).toBe('Main')
      expect(aMember.birthDate).toEqual(new Date(1980, 6, 11))

      aMember = theClub.allMyMembers[4]
      expect(aMember).toBeDefined()
      expect(aMember.id).toBe('M03')
      expect(aMember.firstName).toBe('James')
      expect(aMember.lastName).toBe('Bean')
      expect(aMember.birthDate).toEqual(new Date(2001, 7, 15))
     
      
    })
  })
})