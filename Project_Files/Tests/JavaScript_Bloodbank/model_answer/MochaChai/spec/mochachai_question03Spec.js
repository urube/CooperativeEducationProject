describe('Question Three', () => {
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


   // 'Moore, Sandy [F]\nMcDonald, Danial [M]\nWatson, Cathy [F]\nBurk, John [M]\nWatts, Jonathan [M]\n'
    describe('Should return Display donor data', () => {
      describe('Should start with the last names, each on a seperate line and be sorted in nationalId order', () => {
        it('First Moore then McDonald then Watson then Burk then Watts', () => {
          let output = theBloodBank.displayDonors()
          expect(output).to.match(/^Moore.*\nMcDonald.*\nWatson.*\nBurk.*\nWatts.*\n/)
        })
      })
      
    describe('Display last name of the donor', () => {
        it('Should be first Moore then McDonald then Watson then Burk then Watts', () => {
      let output = theBloodBank.displayDonors()
          expect(output).to.match(/.*Moore.*\n.*McDonald.*\n.*Watson.*\n.*Burk.*\n.*Watts.*/)
        })
      })

    describe('Should have puntuation after last name', () => {
        it('Should be a comma followed by a last name', () => {
          expect(theBloodBank.displayDonors()).to.match(/[,]/)
        })
      })

   describe('Should have space after Puntuation', () => {
        it('Should be a a single space', () => {
          expect(theBloodBank.displayDonors()).to.match(/[,\s]/)
        })
      })

      describe('Display first name of the donor', () => {
        it('Should be Sandy, then Danial, then Cathy, then John and then finally Jonathan', () => {
          let output = theBloodBank.displayDonors()
          expect(output).to.match(/.*Sandy.*\n.*Daniel.*\n.*Cathy.*\n.*John.*\n.*Jonathan.*/)
        })
      })

      describe('Puntuation after the first names', () => {
        it('should be a single space', () => {
      let output = theBloodBank.displayDonors()
          expect(output).to.match(/[\.\s]/)
        })
      })

      describe('The Gender', () => {
        it('Should have one letter enclosed in square brackets ie [M]', () => {
          expect(theBloodBank.displayDonors()).to.match(/\[.]/)
        })
      })

      describe('End of each Donor\'s details', () => {
        it('should end with the newline character', () => {
          expect(theBloodBank.displayDonors()).to.match(/\n/)
        })
      })
    })
  })
})
