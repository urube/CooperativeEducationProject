describe('Question Four', () => {
	'use strict'
	describe('Donation properties', () => {
		var donation
		beforeEach( () => {
			donation = new Donation()
		})

		it('should have a .branchName', () => {
			expect(donation.hasOwnProperty('branchName')).to.be.ok;
		})

		it('should have a .town', () => {
			expect(donation.hasOwnProperty('town')).to.be.ok;
		})

		it('should have a .when', () => {
			expect(donation.hasOwnProperty('when')).to.be.ok;
		})

		it('should have a .bloodGroup', () => {
			expect(donation.hasOwnProperty('bloodGroup')).to.be.ok;
		})
	})

	describe('addDonation exists', () => {
		var aDonor
		beforeEach(() => {
			aDonor = new Donor()
		})

		it('should have an .addDonation function', () => {
			expect(typeof aDonor.addDonation).to.equal('function');
		})

		it ('should increase donation when new donation added', () => {
			var aDonor = new Donor('id', 'fname', 'Lname', 'M')
			aDonor.addDonation(9800100, 'Jonathan', 'Watts', 'M')
			expect(aDonor.allMyDonations.length).to.equal(1)
			aDonor.addDonation(9800101, 'John', 'Dave', 'M')
			expect(aDonor.allMyDonations.length).to.equal(2)
		})
	})
})