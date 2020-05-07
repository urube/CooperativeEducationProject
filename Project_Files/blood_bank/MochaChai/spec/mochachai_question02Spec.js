describe('Question Two', () => {
  describe('adding the five Donors', () => {
    var theBloodBank
    beforeEach(() => {
      theBloodBank = Controller.setup()
    })

    it('should have added 5 Donors', () => {
      expect(theBloodBank.allMyDonors.length).to.equal(5)
    })

    it('should have correctly set details for each Donor', () => {
      var aDonor
      aDonor = theBloodBank.allMyDonors[0]
      expect(aDonor.nationalId).to.equal(9800100)
      expect(aDonor.firstName).to.equal('Jonathan')
      expect(aDonor.lastName).to.equal('Watts')
      expect(aDonor.gender).to.equal('M')

      aDonor = theBloodBank.allMyDonors[1]      
      expect(aDonor.nationalId).to.equal(4023500)
      expect(aDonor.firstName).to.equal('Sandy')
      expect(aDonor.lastName).to.equal('Moore')
      expect(aDonor.gender).to.equal('F')

      aDonor = theBloodBank.allMyDonors[2]
      expect(aDonor.nationalId).to.equal(7906553)
      expect(aDonor.firstName).to.equal('John')
      expect(aDonor.lastName).to.equal('Burk')
      expect(aDonor.gender).to.equal('M')

      aDonor = theBloodBank.allMyDonors[3]
      expect(aDonor.nationalId).to.equal(5000990)
      expect(aDonor.firstName).to.equal('Daniel')
      expect(aDonor.lastName).to.equal('McDonald')
      expect(aDonor.gender).to.equal('M')

      aDonor = theBloodBank.allMyDonors[4]
      expect(aDonor.nationalId).to.equal(6896701)
      expect(aDonor.firstName).to.equal('Cathy')
      expect(aDonor.lastName).to.equal('Watson')
      expect(aDonor.gender).to.equal('F')
    })
  })
})