/* global describe beforeEach Controller it expect BloodBank */
describe('Question Seven', () => {  
  describe('BloodBank.displayPositiveDonations function', () => {
    var theBloodBank
    beforeEach(() => {
      theBloodBank = Controller.setup()
    })

    describe('BloodBank.displayPositiveDonations function', () => {
      it('should return a string', () => {
        expect(typeof theBloodBank.displayPositiveDonations()).toBe('string')
      })

      it('should NOT be hard coded', () => {
        theBloodBank = new BloodBank()
        expect(theBloodBank.displayPositiveDonations()).toBe('')
      })

      it('DiplayPositiveDonations function should return', () => {
        expect(typeof theBloodBank.displayPositiveDonations()).toEqual('string')
      })
    })
 
	describe('BloodBank.displayDonors function', () => {
	  var theBloodBank
	  beforeEach(() => {
		theBloodBank = Controller.setup()
	  })
	  
	  it('should return a string', () => {
        expect(typeof theBloodBank.displayDonors()).toBe('string')
      })

      it('should NOT be hard coded', () => {
        theBloodBank = new BloodBank()
        expect(theBloodBank.displayDonors()).toBe('')
      })
      
      it('DiplayDonors function should return', () => {
       expect(typeof theBloodBank.displayDonors()).toEqual('string')
      })
    })

    describe('Donor.hasPositiveBloodGroup function', () => {
      var theDonor
      beforeEach(() => {
        theDonor = new Donor()
        theDonor.addDonation ('test', 'test', 'test', 'AB+')
      })

      it('should exist', () => {
        expect(theDonor.hasPositiveBloodGroup()).toBeDefined()
      })

      it('should return a boolean', () => {
        expect(typeof theDonor.hasPositiveBloodGroup()).toBe('boolean')
      })

      it('should return true if the blood group is AB+.', () => {
        expect(theDonor.hasPositiveBloodGroup('AB+')).toBeTruthy();
      })
    })

    describe('Donor.getDonations function', () => {
      var theDonor
      beforeEach(() => {
        theDonor = new Donor()
      })

      it('should exist', () => {
        expect(theDonor.getDonations()).toBeDefined()
      })

      it('getDonations function should return', () => {
        expect(typeof theDonor.getDonations()).toEqual('string')
    })
  })

    describe('Donation', () => {
      var donation
      beforeEach(() => {
        donation = new Donation('branchName', 'town', new Date(2019, 5, 15), 'bloodGroup')
      })

      it('should return a string', () => {
        expect(typeof donation.toString()).toBe('string')
      })

      it('should NOT be hard coded', () => {
        expect(donation.toString()).toBe('Has blood group <bloodGroup> donated on 15/06/2019 at branchName')
      })
      
      it('toString function should return', () => {
        expect(typeof donation.toString()).toEqual('string')
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
            expect(output).toMatch(/^Moore/)
          })
        })

        describe('The punctuation after the last name', () => {
          it('should be a comma', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/^Moore,/)
          })
        })

        describe('single space after puntuation', () => {
          it('should be a single space', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/^Moore,\s/)
          })
        })

        describe('The Donor\'s first Name', () => {
          it('should be Danial', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/.*Sandy/)
          })
        })

        describe('The punctuation after the first name', () => {
          it('should be space after first name', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/Sandy\s/)
          })
        })

        describe('Display The gender', () => {
          it('should be a M enclosed in []', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/\[F]/)
          })
        })

        describe('After the gender', () => {
          it('should be a newline', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/\[F]\n/)
          })
        })

        describe('Each Donation\'s details', () => {
          it('should start with a tab \\t character', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/\t/)
          })
        })

        describe('Donor\'s first Donation', () => {
          let theBloodBank = Controller.setup()
          let Donor = theBloodBank.findDonor(4023500)
          Donor.sortDonations()
          let aDonation = Donor.allMyDonations[0]
          let output = aDonation.toString()

          it('and the line start with Has blood group', () => {
            expect(output).toMatch(/^Has blood group/)
          })

          it('should be a single space after has blood group', () => {
            expect(output).toMatch(/Has blood group\s/)
          })

          it('and the blood group should enclosed in <>', () => {
            expect(output).toMatch(/</)
          })

          it('and the blood group should be the <AB+>', () => {
            expect(output).toMatch(/AB+/)
          })

          it('and the blood group should enclosed in <>', () => {
            expect(output).toMatch(/>/)
          })

          it('should be a single space after blood group', () => {
            expect(output).toMatch(/\s/)
          })

          it('should say donated on', () => {
            expect(output).toMatch(/donated on/)
          })

          it('should be a single space after donated on', () => {
            expect(output).toMatch(/donated on\s/)
          })

          it('should display donation date', () => {
            expect(output).toMatch('01/12/2018')
          })
    
          it('should be a single space', () => {
            expect(output).toMatch(/\s/)
          })

          it('should say at', () => {
            expect(output).toMatch(/at/)
          })
      
          it('should be a single space after at', () => {
            expect(output).toMatch(/at\s/)
          })

          it('should display branch name', () => {
            expect(output).toMatch(/Christchurch/)
          })

          it('should line ends here', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/Christchurch\n/)
          })
        }) 
      })
      
      describe('Display positive donations function returns second positive blood donors format', () => {
        describe('The Donor\'s last name', () => {
          it('should be Watts', () => {
            let output = theBloodBank.displayPositiveDonations()
            expect(output).toMatch(/.*Watts/)
          })
        })

        describe('The punctuation after the last name', () => {
          it('should be a comma', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/.*Watts,\s/)
          })
        })

        describe('The Donor\'s first Name', () => {
          it('should be Jonathan', () => {
          expect(theBloodBank.displayPositiveDonations()).toMatch(/.*Watts, Jonathan/)
          })
        })

        describe('The punctuation after the first name', () => {
          it('should be space after first name', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/Jonathan\s/)
          })
        })

        describe('The gender', () => {
          it('should be a M enclosed in []', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/\[M]/)
          })
        })

        describe('After the gender', () => {
          it('should be a newline', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/\[M]\n/)
          })
        })

        describe('Each Donation\'s details', () => {
          it('should start with a tab \\t character', () => {
            expect(theBloodBank.displayPositiveDonations()).toMatch(/\n\t/)
          })
        })

      describe('Second Donor\'s first Donation', () => {
        let theBloodBank = Controller.setup()
        let Donor = theBloodBank.findDonor(9800100)
        Donor.sortDonations()
        let aDonation = Donor.allMyDonations[0]
        let output = aDonation.toString()

        it('and the line start with Has blood group', () => {
          expect(output).toMatch(/^Has blood group/)
        })

        it('should be a single space after has blood group', () => {
          expect(output).toMatch(/Has blood group\s/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).toMatch(/</)
        })

        it('and the blood group should be the <AB+>', () => {
          expect(output).toMatch(/AB+/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).toMatch(/>/)
        })

        it('should be a single space after blood group', () => {
          expect(output).toMatch(/\s/)
        })

        it('should say donated on', () => {
          expect(output).toMatch(/donated on/)
        })

        it('should be a single space after donated on', () => {
          expect(output).toMatch(/donated on\s/)
        })

        it('should display donation date', () => {
          expect(output).toMatch('09/11/2017')
        })
        
        it('should be a single space', () => {
          expect(output).toMatch(/\s/)
        })

        it('should say at', () => {
          expect(output).toMatch(/at/)
        })
        
        it('should be a single space after at', () => {
          expect(output).toMatch(/at\s/)
        })

        it('should display branch name', () => {
          expect(output).toMatch(/Nelson/)
        })

        it('should line ends here', () => {
          expect(theBloodBank.displayPositiveDonations()).toMatch(/Nelson\n\t/)
        })
      })

      describe('Second Donor\'s second Donation', () => {
        let theBloodBank = Controller.setup()
        let Donor = theBloodBank.findDonor(9800100)
        Donor.sortDonations()
        let aDonation = Donor.allMyDonations[1]
        let output = aDonation.toString()

        it('and the line start with Has blood group', () => {
          expect(output).toMatch(/^Has blood group/)
        })

        it('should be a single space after has blood group', () => {
          expect(output).toMatch(/Has blood group\s/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).toMatch(/</)
        })

        it('and the blood group should be the <AB+>', () => {
          expect(output).toMatch(/AB+/)
        })

        it('and the blood group should enclosed in <>', () => {
          expect(output).toMatch(/>/)
        })

        it('should be a single space after blood group', () => {
          expect(output).toMatch(/\s/)
        })

        it('should say donated on', () => {
          expect(output).toMatch(/donated on/)
        })

        it('should be a single space after donated on', () => {
          expect(output).toMatch(/donated on\s/)
        })

        it('should display donation date', () => {
          expect(output).toMatch('05/10/2018')
        })
        
        it('should be a single space', () => {
          expect(output).toMatch(/\s/)
        })

        it('should say at', () => {
          expect(output).toMatch(/at/)
        })
        
        it('should be a single space after at', () => {
          expect(output).toMatch(/at\s/)
        })

        it('should display branch name', () => {
          expect(output).toMatch(/Otago/)
        })

        it('should line ends here', () => {
          expect(theBloodBank.displayPositiveDonations()).toMatch(/Otago\n/)
        })
      })
    })
  })
  describe('DiplayPositiveDonations function', () => {
    it('should work perectly', () => {
      var theBloodBank = Controller.setup()
      expect(theBloodBank.displayPositiveDonations()).toBe(
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