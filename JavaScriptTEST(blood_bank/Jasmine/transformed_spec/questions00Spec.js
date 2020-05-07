/* global describe beforeEach it expect BloodBank Donor */
describe('Basic Check For Original Source Code', () => {
  describe('BloodBank', () => {
    var theBloodBank
    beforeEach(() => {
      theBloodBank = new BloodBank()
    })

    describe('the allMyDonors property', () => {
      it('should have an .allMyDonors property', () => {
        expect(theBloodBank.hasOwnProperty('allMyDonors')).to.be.ok;
      })

      it('should reference an array', () => {
        expect(Array.isArray(theBloodBank.allMyDonors)).to.be.ok;
      })
    })

    it('should have an .addDonor function', () => {
      expect(typeof theBloodBank.addDonor).to.equal('function');
    })

    it('should have an .findDonor function', () => {
      expect(typeof theBloodBank.findDonor).to.equal('function');
    })

    it('should have an .sortDonors function', () => {
      expect(typeof theBloodBank.sortDonors).to.equal('function');
    })
  })

  describe('Donor', () => {
    var aDonor
    beforeEach(function () {
      aDonor = new Donor()
    })

    it('should have a nationalId property', () => {
      expect(aDonor.hasOwnProperty('nationalId')).to.be.ok;
    })

    it('should have a .firstName property', () => {
      expect(aDonor.hasOwnProperty('firstName')).to.be.ok;
    })

    it('should have a .lastName property', () => {
      expect(aDonor.hasOwnProperty('lastName')).to.be.ok;
    })

    it('should have a .gender property', () => {
      expect(aDonor.hasOwnProperty('gender')).to.be.ok;
    })

    describe('the allMyDonations property', () => {
      it('should have an .allMyDonations reference', () => {
        expect(aDonor.hasOwnProperty('allMyDonations')).to.be.ok;
      })

      it('should reference an array', () => {
        expect(Array.isArray(aDonor.allMyDonations)).to.be.ok;
      })
    })

    it('should have a .sortDonations function', () => {
      expect(typeof aDonor.sortDonations).to.equal('function');
    })
  })
})