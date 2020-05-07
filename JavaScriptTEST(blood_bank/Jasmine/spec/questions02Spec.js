/* globals describe beforeEach Controller it expect */
describe('Question Two', () => {
  describe('adding the five Donors', () => {
    var theBloodBank
    beforeEach(() => {
      theBloodBank = Controller.setup()
    })

    it('should have added 5 Donors', () => {
      expect(theBloodBank.allMyDonors.length).toBe(5)
    })

    it('should have correctly set details for each Donor', () => {
      var aDonor
      aDonor = theBloodBank.allMyDonors[0]
      expect(aDonor).toBeDefined()
      expect(aDonor.nationalId).toBe(9800100)
      expect(aDonor.firstName).toBe('Jonathan')
      expect(aDonor.lastName).toBe('Watts')
      expect(aDonor.gender).toEqual('M')

      aDonor = theBloodBank.allMyDonors[1]
      expect(aDonor).toBeDefined()
      expect(aDonor.nationalId).toBe(4023500)
      expect(aDonor.firstName).toBe('Sandy')
      expect(aDonor.lastName).toBe('Moore')
      expect(aDonor.gender).toEqual('F')

      aDonor = theBloodBank.allMyDonors[2]
      expect(aDonor).toBeDefined()
      expect(aDonor.nationalId).toBe(7906553)
      expect(aDonor.firstName).toBe('John')
      expect(aDonor.lastName).toBe('Burk')
      expect(aDonor.gender).toEqual('M')

      aDonor = theBloodBank.allMyDonors[3]
      expect(aDonor).toBeDefined()
      expect(aDonor.nationalId).toBe(5000990)
      expect(aDonor.firstName).toBe('Daniel')
      expect(aDonor.lastName).toBe('McDonald')
      expect(aDonor.gender).toEqual('M')

      aDonor = theBloodBank.allMyDonors[4]
      expect(aDonor).toBeDefined()
      expect(aDonor.nationalId).toBe(6896701)
      expect(aDonor.firstName).toBe('Cathy')
      expect(aDonor.lastName).toBe('Watson')
      expect(aDonor.gender).toEqual('F')
    })
  })
})