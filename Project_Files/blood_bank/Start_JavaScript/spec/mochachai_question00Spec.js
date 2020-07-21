describe('Basic Check For Original Source Code', function() {
	describe('BloodBank', function() {
		var theBloodBank

		beforeEach(function() {
  			theBloodBank = new BloodBank()
		})

		describe('the allMyDonors property', function() {
  			it('should have an .allMyDonors property', function() {
   			  expect(theBloodBank.hasOwnProperty('allMyDonors')).to.be.true
 		 	  })

  			it('should reference an array', function() {
   			 expect(Array.isArray(theBloodBank.allMyDonors)).to.be.true
  			})
		})

		it('should have an .addDonor function', function() {
		  expect(typeof theBloodBank.addDonor).to.equal('function')
		})

		it('should have an .findDonor function', function() {
		  expect(typeof theBloodBank.findDonor).to.equal('function')
		})

		it('should have an .sortDonors function', function() {
		  expect(typeof theBloodBank.sortDonors).to.equal('function')
		})
	})

	describe('Donor', () => {
	    var aDonor

	    beforeEach(function () {
	      aDonor = new Donor()
	    })

    it('should have a nationalId property', function() {
      expect(aDonor.hasOwnProperty('nationalId')).to.be.true
    })

    it('should have a .firstName property', function() {
      expect(aDonor.hasOwnProperty('firstName')).to.be.true
    })

    it('should have a .lastName property', function() {
      expect(aDonor.hasOwnProperty('lastName')).to.be.true
    })

    it('should have a .gender property', function() {
      expect(aDonor.hasOwnProperty('gender')).to.be.true
    })

    describe('the allMyDonations property', function() {
	  it('should have an .allMyDonations reference', function() {
	    expect(aDonor.hasOwnProperty('allMyDonations')).to.be.true
	  })

      it('should reference an array', function() {
        expect(Array.isArray(aDonor.allMyDonations)).to.be.true
      })
    })

    it('should have a .sortDonations function', function() {
      expect(typeof aDonor.sortDonations).to.equal('function')
    })
  })
})