/* global describe beforeEach Controller it expect Club */
describe('Question Seven', () => {
  describe('Club.displayMembers function', () => {
    var theClub
    beforeEach(() => {
      theClub = Controller.setup()
    })

    describe('Club.displayBusyMembers function', () => {
      it('should return a string', () => {
        expect(typeof theClub.displayBusyMembers()).toBe('string')
      })

      it('should NOT be hard coded', () => {
        theClub = new Club()
        expect(theClub.displayBusyMembers()).toBe('')
      })
      
      it('DiplayMembers function should return', () => {
       expect(typeof theClub.displayBusyMembers()).toEqual('string')
      })
    })

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
    })

    describe('Member.hasManyActivities function', () => {
        var theMember
        beforeEach(() => {
          theMember = new Member()
        })

        it('should exist', () => {
          expect(theMember.hasManyActivities()).toBeDefined()
        })

        it('should return a boolean', () => {
          expect(typeof theMember.hasManyActivities()).toBe('boolean')
        })

        it('should return false if the number of activity is equal to zero.', () => {
          theMember = new Member('tao', null, null, null, null)
          expect(theMember.hasManyActivities()).toBe(false)
        })
      })

    describe('Member.getActivities function', () => {
        var theMember
        beforeEach(() => {
          theMember = new Member()
        })

        it('should exist', () => {
          expect(theMember.getActivities()).toBeDefined()
        })
  
        it('getActivities function should return', () => {
       expect(typeof theMember.getActivities()).toEqual('string')
      })
    })
     
    describe('Activity', () => {
      var activity
      beforeEach(() => {
      activity = new Activity('name', 'place', new Date(2019, 5, 14), 'cost')
      })

      it('should return a string', () => {
        expect(typeof activity.toString()).toBe('string')
      })

      it('should NOT be hard coded', () => {
        expect(activity.toString()).toBe('name starts on 14/06/2019 at place')
      })
      
      it('toString function should return', () => {
        expect(typeof activity.toString()).toEqual('string')
      })
    })
      
    // Beam, Jim\s[M05]\n\tFestival of Colour starts on 2018-11-07 at Hamilton\n\tEaster High Tea starts on 2018-12-10 at Wellington\n\tJoyride Carnival starts on 2019-05-02 at Auckland\n'
    describe('Display Busy Member function returns busy member format', () => {
      describe('The member\'s last name', () => {
        it('should be Beam', () => {
          let output = theClub.displayBusyMembers()
          expect(output).toMatch(/^Beam/)
        })
      })

      describe('The punctuation after the last name', () => {
        it('should be a comma', () => {
          expect(theClub.displayBusyMembers()).toMatch(/^Beam,/)
        })
      })

      describe('single space after puntuation', () => {
        it('should be a single space', () => {
          expect(theClub.displayBusyMembers()).toMatch(/^Beam,\s/)
        })
      })
      
      describe('The member\'s first Name', () => {
        it('should be Main', () => {
          expect(theClub.displayBusyMembers()).toMatch(/^Beam, Jim/)
        })
      })

      describe('The punctuation after the first name', () => {
        it('should be space after first name', () => {
          expect(theClub.displayBusyMembers()).toMatch(/Jim\s/)
        })
      })

      describe('The id', () => {
        it('should be enclosed in []', () => {
          expect(theClub.displayBusyMembers()).toMatch(/\[M05]/)
        })
      })

      describe('After the id', () => {
        it('should be a newline', () => {
          expect(theClub.displayBusyMembers()).toMatch(/\[M05]\n/)
        })
      })

      describe('Each Activity\'s details', () => {
        it('should start with a tab \\t character', () => {
          expect(theClub.displayBusyMembers()).toMatch(/\n\t/)
        })
      })

      describe('Member\'s first Activity', () => {
        let theClub = Controller.setup()
        let member = theClub.findMember('M05')
        member.sortActivities()
        let anActivity = member.allMyActivities[0]
        let output = anActivity.toString()

        it('and the activity name should be the Festival of Colour', () => {
          expect(output).toMatch(/^Festival of Colour/)
        })

        it('should be a space after activity name', () => {
          expect(output).toMatch(/Festival of Colour\s/)
        })

        it('should say starts on', () => {
          expect(output).toMatch(/starts on/)
        })

        it('should be a single space', () => {
          expect(output).toMatch(/starts on\s/)
        })

        it('should display start date', () => {
          expect(output).toMatch('07/11/2018')
        })

        it('should be a single space', () => {
          expect(output).toMatch(/\s/)
        })

        it('should say at', () => {
          expect(output).toMatch(/at/)
        })

        it('should be a single space', () => {
          expect(output).toMatch(/at\s/)
        })

        it('should say Hamilton', () => {
          expect(output).toMatch(/Hamilton/)
        })

        it('should line end here', () => {
          expect(theClub.displayBusyMembers()).toMatch(/Hamilton\n\t/)
        })
      })

      describe('Member\'s second Activity', () => {
        let theClub = Controller.setup()
        let member = theClub.findMember('M05')
        member.sortActivities()
        let anActivity = member.allMyActivities[1]
        let output = anActivity.toString()

        it('and the activity name should be the Easter High Tea', () => {
          expect(output).toMatch(/^Easter High Tea/)
        })

        it('should be a space after activity name', () => {
          expect(output).toMatch(/Easter High Tea\s/)
        })

        it('should say starts on', () => {
          expect(output).toMatch(/starts on/)
        })

        it('should be a single space', () => {
          expect(output).toMatch(/starts on\s/)
        })
        
        it('should display start date', () => {
          expect(output).toMatch('10/12/2018')
        })

        it('should be a single space', () => {
          expect(output).toMatch(/\s/)
        })

        it('should say at', () => {
          expect(output).toMatch(/at/)
        })

        it('should be a single space', () => {
          expect(output).toMatch(/at\s/)
        })

        it('should say Wellington', () => {
          expect(output).toMatch(/Wellington/)
        })

        it('should line end here', () => {
          expect(theClub.displayBusyMembers()).toMatch(/Wellington\n\t/)
        })
      })

      describe('Member\'s third Activity', () => {
        let theClub = Controller.setup()
        let member = theClub.findMember('M05')
        member.sortActivities()
        let anActivity = member.allMyActivities[2]
        let output = anActivity.toString()

        it('and the activity name should be the Joyride Carnival', () => {
          expect(output).toMatch(/^Joyride Carnival/)
        })

        it('should be a space after activity name', () => {
          expect(output).toMatch(/Joyride Carnival\s/)
        })      

        it('should say starts on', () => {
          expect(output).toMatch(/starts on/)
        })

        it('should be a single space', () => {
          expect(output).toMatch(/starts on\s/)
        })

        it('should display start date', () => {
          expect(output).toMatch('05/02/2019')
        })

        it('should be a single space', () => {
          expect(output).toMatch(/\s/)
        })

        it('should say at', () => {
          expect(output).toMatch(/at/)
        })

        it('should be a single space', () => {
          expect(output).toMatch(/at\s/)
        })

        it('should say Auckland', () => {
          expect(output).toMatch(/Auckland/)
        })

        it('should line end here', () => {
          expect(theClub.displayBusyMembers()).toMatch(/Auckland\n/)
        })
      })
    })
  })
  describe('DisplayBusyMember function', () => {
    it('should work', () => {
      var theClub = Controller.setup() 
      expect(theClub.displayBusyMembers()).toBe('Beam, Jim [M05]\n\tFestival of Colour starts on 07/11/2018 at Hamilton\n\tEaster High Tea starts on 10/12/2018 at Wellington\n\tJoyride Carnival starts on 05/02/2019 at Auckland\n')
    })
  })
})
