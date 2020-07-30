describe('Question Five', () => {
	'use strict'
	describe('write a Donor.addDonation function to add the Donations', () => {
		var theBank
		beforeEach(() => {
			theBank = Controller.setup()
			theBank.sortDonors()
		})

		describe('Should have correct donation id', () => {
			it('Donor 9800100 should have 1 Activity', () => {
				var theDonor = theBank.findDonor(9800100)
				expect(theDonor.allMyDonations.length).to.equal(2);
			})

			it('Donor 4023500 should have 1 Activity', () => {
				var theDonor = theBank.findDonor(4023500)
				expect(theDonor.allMyDonations.length).to.equal(1);
			})

			it('Donor 7906553 should have 1 Activity', () => {
				var theDonor = theBank.findDonor(7906553)
				expect(theDonor.allMyDonations.length).to.equal(1);
			})

			it('Donor 5000990 should have 1 Activity', () => {
				var theDonor = theBank.findDonor(5000990)
				expect(theDonor.allMyDonations.length).to.equal(1);
			})

			it('Donor 6896701 should have 1 Activity', () => {
				var theDonor = theBank.findDonor(6896701)
				expect(theDonor.allMyDonations.length).to.equal(1);
			})
		})

		it ('should have correct format set of Donation details', () => {
			var aDonation, theDonor
			theDonor = theBank.findDonor(4023500)
			aDonation = theDonor.allMyDonations[0]
			expect(aDonation).not.to.be.undefined;
			expect(aDonation.branchName).to.equal('Christchurch');
			expect(aDonation.town).to.equal('Addington');
			expect(aDonation.when).to.deep.equal(new Date(2018, 11, 1));
			expect(aDonation.bloodGroup).to.equal('AB+')

			theDonor = theBank.findDonor(5000990)
			aDonation = theDonor.allMyDonations[0]
			expect(aDonation).not.to.be.undefined;
			expect(aDonation.branchName).to.equal('Wellington');
			expect(aDonation.town).to.equal('Newtown');
			expect(aDonation.when).to.deep.equal(new Date(2017, 7, 11));
			expect(aDonation.bloodGroup).to.equal('O-')

			theDonor = theBank.findDonor(6896701)
			aDonation = theDonor.allMyDonations[0]
			expect(aDonation).not.to.be.undefined;
			expect(aDonation.branchName).to.equal('Auckland');
			expect(aDonation.town).to.equal('Manuka');
			expect(aDonation.when).to.deep.equal(new Date(2019, 6, 15));
			expect(aDonation.bloodGroup).to.equal('O+')

			theDonor = theBank.findDonor(7906553)
			aDonation = theDonor.allMyDonations[0]
			expect(aDonation).not.to.be.undefined;
			expect(aDonation.branchName).to.equal('North Shore');
			expect(aDonation.town).to.equal('Takapuna');
			expect(aDonation.when).to.deep.equal(new Date(2016, 11, 9));
			expect(aDonation.bloodGroup).to.equal('B-')

			theDonor = theBank.findDonor(9800100)
			aDonation = theDonor.allMyDonations[0]
			expect(aDonation).not.to.be.undefined;
			expect(aDonation.branchName).to.equal('Nelson');
			expect(aDonation.town).to.equal('Tahunanui');
			expect(aDonation.when).to.deep.equal(new Date(2017, 10, 9));
			expect(aDonation.bloodGroup).to.equal('AB+')

			theDonor = theBank.findDonor(9800100)
			aDonation = theDonor.allMyDonations[1]
			expect(aDonation).not.to.be.undefined;
			expect(aDonation.branchName).to.equal('Otago');
			expect(aDonation.town).to.equal('Dunedin');
			expect(aDonation.when).to.deep.equal(new Date(2018, 9, 5));
			expect(aDonation.bloodGroup).to.equal('AB+')
		})
	})
})