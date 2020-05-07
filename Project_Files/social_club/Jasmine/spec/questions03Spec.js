describe('Question Three', () => {
  describe('Club.displayMembers function', () => {
    var theClub
    beforeEach(() => {
      theClub = Controller.setup()
    })

    it('should return a string', () => {
      expect(typeof theClub.displayMembers()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theClub = new Club()
      expect(theClub.displayMembers()).toBe('')
    })
    
    it('DiplayMembers function should return', () => {
     expect(typeof theClub.displayMembers()).toEqual('string')
    })

   // 'Main, Carla [M01]\nShelly, Mary [M02]\nBean, James [M03]\nDean, Melvin [M04]\nBeam, Jim[M05]\n'
    describe('Should return Display Member data', () => {
      describe('Should start with the last names, each on a seperate line and be sorted in ID order', () => {
        it('First Main then Shelly then Bean then Dean then Beam', () => {
          let output = theClub.displayMembers()
          expect(output).toMatch(/^Main.*\nShelly.*\nBean.*\nDean.*\nBeam.*\n/)
        })
      })

    describe('Display last name of the member', () => {
        it('Should be first Main, then Shelly, then Bean, then Dean and finally Beam', () => {
          let output = theClub.displayMembers()
          expect(output).toMatch(/.*Main.*\n.*Shelly.*\n.*Bean.*\n.*Dean.*\n.*Beam.*/)
        })
      })
              
      describe('Should have Puntuation after last name', () => {
        it('Should be a comma followed by a last name', () => {
          expect(theClub.displayMembers()).toMatch(/[,]/)
        })
      })
      
      describe('Should have space after Puntuation', () => {
        it('Should be a a single space', () => {
          expect(theClub.displayMembers()).toMatch(/[,\s]/)
        })
      })
            
      describe('Display first name of the member', () => {
        it('Should be Carla, then Mary, then James, then Melvin and then finally Jim', () => {
          let output = theClub.displayMembers()
          expect(output).toMatch(/.*Carla.*\n.*Mary.*\n.*James.*\n.*Melvin.*\n.*Jim.*/)
        })
      })
      
      describe('Puntuation after first name', () => {
        it('Should be a single space', () => {
          let output = theClub.displayMembers()
          expect(output).toMatch(/[\.\s]/)
        })
      })

      describe('the IDs', () => {
        it('Should have three letters enclosed in square brackets ie [M00]', () => {
          expect(theClub.displayMembers()).toMatch(/\[...]/)
        })
      })

      describe('end of each member\'s details', () => {
        it('should end with the newline character', () => {
          expect(theClub.displayMembers()).toMatch(/\n/)
        })
      })
    })
  })
})
