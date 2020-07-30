/* global describe beforeEach Controller it expect BloodBank */
describe('Question Seven', () => {  
  describe('BloodBank.displayPositiveDonations function', () => {
    var theBloodBank
    beforeEach(() => {
      theBloodBank = Controller.setup()
    })

    describe('BloodBank.displayPositiveDonations function', () => {
      it('should return a string', () => {
        expect(typeof theBloodBank.displayPositiveDonations()).to.be.equal('string')
      })

      it('should NOT be hard coded', () => {
        theBloodBank = new BloodBank()
        expect(theBloodBank.displayPositiveDonations()).to.be.equal('')
      })

      it('DiplayPositiveDonations function should return', () => {
        expect(typeof theBloodBank.displayPositiveDonations()).to.be.equal('string')
      })
    })
 
  describe('BloodBank.displayDonors function', () => {
    var theBloodBank
    beforeEach(() => {
    theBloodBank = Controller.setup()
    })
    
    it('should return a string', () => {
        expect(typeof theBloodBank.displayDonors()).to.be.equal('string')
      })

      it('should NOT be hard coded', () => {
        theBloodBank = new BloodBank()
        expect(theBloodBank.displayDonors()).to.be.equal('')
      })
      
      it('DiplayDonors function should return', () => {
       expect(typeof theBloodBank.displayDonors()).to.be.equal('string')
      })
    })

    describe('Donor.hasPositiveBloodGroup function', () => {
      var theDonor
      beforeEach(() => {
        theDonor = new Donor()
        theDonor.addDonation ('test', 'test', 'test', 'AB+')
      })

      it('should exist', () => {
        expect(theDonor.hasPositiveBloodGroup()).to.exist;
      })

      it('should return a boolean', () => {
        expect(typeof theDonor.hasPositiveBloodGroup()).to.be.equal('boolean')
      })

      it('should return true if the blood group is AB+.', () => {
        expect(theDonor.hasPositiveBloodGroup('AB+')).to.be.true;
      })
    })

    describe('Donor.getDonations function', () => {
      var theDonor
      beforeEach(() => {
        theDonor = new Donor()
      })

      it('should exist', () => {
        expect(theDonor.getDonations()).to.exist;
      })

      it('getDonations function should return', () => {
        expect(typeof theDonor.getDonations()).to.be.equal('string')
    })
  })

    describe('Donation', () => {
      var donation
      beforeEach(() => {
        donation = new Donation('branchName', 'town', new Date(2019, 5, 15), 'bloodGroup')
      })

      it('should return a string', () => {
        expect(typeof donation.toString()).to.be.equal('string')
      })

      it('should NOT be hard coded', () => {
        expect(donation.toString()).to.be.equal('Has blood group <bloodGroup> donated on 15/06/2019 at branchName')
      })
      
      it('toString function should return', () => {
        expect(typeof donation.toString()).to.be.equal('string')
      })
    })

      // Moore, Sandy [F]
        // Has blood group <AB+> donated on 01/12/18 at Christchurch
      // Watts, Jonathan [M]
          // Has blood group <AB+> donated on 09/11/17 at Nelson
          // Has blood group <AB+> donated on 05/10/18 at Otago
      describe('Display positive donations function returns positive blood donors format', () => {
        describe('The Donor\'s last name', () => {
          it('should be Moore', () => {
            let output = theBloodBank.displayPositiveDonations()
            expect(output).to.match(/^Moore/)
          })
        })

        describe('The punctuation after the last name', () => {
          it('should be a comma', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/^Moore,/)
          })
        })

        describe('single space after puntuation', () => {
          it('should be a single space', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/^Moore,\s/)
          })
        })

        describe('The Donor\'s first Name', () => {
          it('should be Danial', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/.*Sandy/)
          })
        })

        describe('The punctuation after the first name', () => {
          it('should be space after first name', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/Sandy\s/)
          })
        })

        describe('Display The gender', () => {
          it('should be a M enclosed in []', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/\[F]/)
          })
        })

        describe('After the gender', () => {
          it('should be a newline', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/\[F]\n/)
          })
        })

        describe('Each Donation\'s details', () => {
          it('should start with a tab \\t character', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/\t/)
          })
        })

        describe('Donor\'s first Donation', () => {
          let theBloodBank = Controller.setup()
          let Donor = theBloodBank.findDonor(4023500)
          Donor.sortDonations()
          let aDonation = Donor.allMyDonations[0]
          let output = aDonation.toString()

          it('and the line start with Has blood group', () => {
            expect(output).to.match(/^Has blood group/)
          })

          it('should be a single space after has blood group', () => {
            expect(output).to.match(/Has blood group\s/)
          })

          it('and the blood group should enclosed in <>', () => {
            expect(output).to.match(/</)
          })

          it('and the blood group should be the <AB+>', () => {
            expect(output).to.match(/AB+/)
          })

          it('and the blood group should enclosed in <>', () => {
            expect(output).to.match(/>/)
          })

          it('should be a single space after blood group', () => {
            expect(output).to.match(/\s/)
          })

          it('should say donated on', () => {
            expect(output).to.match(/donated on/)
          })

          it('should be a single space after donated on', () => {
            expect(output).to.match(/donated on\s/)
          })

          it('should display donation date', () => {
            expect(output).to.match(new RegExp('01/12/2018'))
          })
    
          it('should be a single space', () => {
            expect(output).to.match(/\s/)
          })

          it('should say at', () => {
            expect(output).to.match(/at/)
          })
      
          it('should be a single space after at', () => {
            expect(output).to.match(/at\s/)
          })

          it('should display branch name', () => {
            expect(output).to.match(/Christchurch/)
          })

          it('should line ends here', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/Christchurch\n/)
          })
        }) 
      })
      
      describe('Display positive donations function returns second positive blood donors format', () => {
        describe('The Donor\'s last name', () => {
          it('should be Watts', () => {
            let output = theBloodBank.displayPositiveDonations()
            expect(output).to.match(/.*Watts/)
          })
        })

        describe('The punctuation after the last name', () => {
          it('should be a comma', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/.*Watts,\s/)
          })
        })

        describe('The Donor\'s first Name', () => {
          it('should be Jonathan', () => {
          expect(theBloodBank.displayPositiveDonations()).to.match(/.*Watts, Jonathan/)
          })
        })

        describe('The punctuation after the first name', () => {
          it('should be space after first name', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/Jonathan\s/)
          })
        })

        describe('The gender', () => {
          it('should be a M enclosed in []', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/\[M]/)
          })
        })

        describe('After the gender', () => {
          it('should be a newline', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/\[M]\n/)
          })
        })

        describe('Each Donation\'s details', () => {
          it('should start with a tab \\t character', () => {
            expect(theBloodBank.displayPositiveDonations()).to.match(/\n\t/)
          })
        })

      describe('Second Donor\'s first Donation', () => {
        let theBloodBank = Controller.setup()
        let Donor = theBloodBank.findDonor(9800100)
        Donor.sortDonations()
        let aDonation = Donor.allMyDonations[0]
        let output = aDonation.toString()

        it('and the line start with Has blood group', () => {
          expect(output).to.match(/^Has blood group/)
        })

        it('should be a single space after has blood group', () => {
          expect(output).to.match(/Has blood group\s/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).to.match(/</)
        })

        it('and the blood group should be the <AB+>', () => {
          expect(output).to.match(/AB+/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).to.match(/>/)
        })

        it('should be a single space after blood group', () => {
          expect(output).to.match(/\s/)
        })

        it('should say donated on', () => {
          expect(output).to.match(/donated on/)
        })

        it('should be a single space after donated on', () => {
          expect(output).to.match(/donated on\s/)
        })

        it('should display donation date', () => {
          expect(output).to.match(new RegExp("9/11/2017"))
        })
        
        it('should be a single space', () => {
          expect(output).to.match(/\s/)
        })

        it('should say at', () => {
          expect(output).to.match(/at/)
        })
        
        it('should be a single space after at', () => {
          expect(output).to.match(/at\s/)
        })

        it('should display branch name', () => {
          expect(output).to.match(/Nelson/)
        })

        it('should line ends here', () => {
          expect(theBloodBank.displayPositiveDonations()).to.match(/Nelson\n\t/)
        })
      })

      describe('Second Donor\'s second Donation', () => {
        let theBloodBank = Controller.setup()
        let Donor = theBloodBank.findDonor(9800100)
        Donor.sortDonations()
        let aDonation = Donor.allMyDonations[1]
        let output = aDonation.toString()

        it('and the line start with Has blood group', () => {
          expect(output).to.match(/^Has blood group/)
        })

        it('should be a single space after has blood group', () => {
          expect(output).to.match(/Has blood group\s/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).to.match(/</)
        })

        it('and the blood group should be the <AB+>', () => {
          expect(output).to.match(/AB+/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).to.match(/>/)
        })

        it('should be a single space after blood group', () => {
          expect(output).to.match(/\s/)
        })

        it('should say donated on', () => {
          expect(output).to.match(/donated on/)
        })

        it('should be a single space after donated on', () => {
          expect(output).to.match(/donated on\s/)
        })

        it('should display donation date', () => {
          expect(output).to.match(new RegExp('05/10/2018')) 
        })
        
        it('should be a single space', () => {
          expect(output).to.match(/\s/)
        })

        it('should say at', () => {
          expect(output).to.match(/at/)
        })
        
        it('should be a single space after at', () => {
          expect(output).to.match(/at\s/)
        })

        it('should display branch name', () => {
          expect(output).to.match(/Otago/)
        })

        it('should line ends here', () => {
          expect(theBloodBank.displayPositiveDonations()).to.match(/Otago\n/)
        })
      })
    })
  })
  describe('DiplayPositiveDonations function', () => {
    it('should work perfectly', () => {
      var theBloodBank = Controller.setup()
      expect(theBloodBank.displayPositiveDonations()).to.be.equal(
        'Moore, Sandy [F]\n'
        + '\tHas blood group <AB+> donated on 01/12/2018 at Christchurch\n'
        + 'Watson, Cathy [F]\n'
        + '\tHas blood group <O+> donated on 15/07/2019 at Auckland\n'
        + 'Watts, Jonathan [M]\n'
        + '\tHas blood group <AB+> donated on 09/11/2017 at Nelson\n'
        + '\tHas blood group <AB+> donated on 05/10/2018 at Otago\n'
      )
    })
  })
})