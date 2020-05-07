/* global describe beforeEach it expect BloodBank Donor */
describe('Basic Check For Original Source Code', () => {
  describe('BloodBank', () => {
    var theBloodBank
    beforeEach(() => {
      theBloodBank = new BloodBank()
    })

    describe('the allMyDonors property', () => {
      it('should have an .allMyDonors property', () => {
        expect(theBloodBank.hasOwnProperty('allMyDonors')).toBeTruthy()
      })

      it('should reference an array', () => {
        expect(Array.isArray(theBloodBank.allMyDonors)).toBeTruthy()
      })
    })

    it('should have an .addDonor function', () => {
      expect(typeof theBloodBank.addDonor).toBe('function')
    })

    it('should have an .findDonor function', () => {
      expect(typeof theBloodBank.findDonor).toBe('function')
    })

    it('should have an .sortDonors function', () => {
      expect(typeof theBloodBank.sortDonors).toBe('function')
    })
  })

  describe('Donor', () => {
    var aDonor
    beforeEach(function () {
      aDonor = new Donor()
    })

    it('should have a nationalId property', () => {
      expect(aDonor.hasOwnProperty('nationalId')).toBeTruthy()
    })

    it('should have a .firstName property', () => {
      expect(aDonor.hasOwnProperty('firstName')).toBeTruthy()
    })

    it('should have a .lastName property', () => {
      expect(aDonor.hasOwnProperty('lastName')).toBeTruthy()
    })

    it('should have a .gender property', () => {
      expect(aDonor.hasOwnProperty('gender')).toBeTruthy()
    })

    describe('the allMyDonations property', () => {
      it('should have an .allMyDonations reference', () => {
        expect(aDonor.hasOwnProperty('allMyDonations')).toBeTruthy()
      })

      it('should reference an array', () => {
        expect(Array.isArray(aDonor.allMyDonations)).toBeTruthy()
      })
    })

    it('should have a .sortDonations function', () => {
      expect(typeof aDonor.sortDonations).toBe('function')
    })
  })
})