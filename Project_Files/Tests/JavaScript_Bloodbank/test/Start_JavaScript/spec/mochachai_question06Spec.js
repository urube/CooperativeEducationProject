describe('Question Six', () => {
	'use strict'
	describe('Donor.hasPositiveBloodGroup function', () => {
		var theDonor
		beforeEach( () => {
			theDonor = new Donor()
		})

		it('should exist', () => {
			expect(theDonor.hasPositiveBloodGroup).not.to.be.undefined;
		})

		it('should return a boolean', () => {
			expect(typeof theDonor.hasPositiveBloodGroup()).to.equal('boolean');
		})

		it('should return false if the number of donation is equal to zero', () => {
			theDonor = new Donor('test', 'test', 'test', 'test')
			expect(theDonor.hasPositiveBloodGroup()).to.be.equal(false);
		})

		it('should return true if the number of donation is equal or more than one', () => {
			theDonor = new Donor('test', 'test', 'test', 'test')
			theDonor.addDonation('a', 'b', 'M', 'AB+')
			expect(theDonor.hasPositiveBloodGroup()).to.be.equal(true);
		})
	})
})