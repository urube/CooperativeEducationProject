/* global describe beforeEach Controller it expect Club */
describe('Question Seven', () => {
  describe('Club.displayMembers function', () => {
    var theClub
    beforeEach(() => {
      theClub = Controller.setup()
    })

    describe('Club.displayBusyMembers function', () => {
      it('should return a string', () => {
        expect(typeof theClub.displayBusyMembers()).to.equal('string');
      })

      it('should NOT be hard coded', () => {
        theClub = new Club()
        expect(theClub.displayBusyMembers()).to.equal('');
      })
      
      it('DiplayMembers function should return', () => {
       expect(typeof theClub.displayBusyMembers()).to.deep.equal('string');
      })
    })

    describe('Club.displayMembers function', () => {
      var theClub
      beforeEach(() => {
        theClub = Controller.setup()
      })

      it('should return a string', () => {
        expect(typeof theClub.displayMembers()).to.equal('string');
      })

      it('should NOT be hard coded', () => {
        theClub = new Club()
        expect(theClub.displayMembers()).to.equal('');
      })
      
      it('DiplayMembers function should return', () => {
       expect(typeof theClub.displayMembers()).to.deep.equal('string');
      })
    })

    describe('Member.hasManyActivities function', () => {
        var theMember
        beforeEach(() => {
          theMember = new Member()
        })

        it('should exist', () => {
          expect(theMember.hasManyActivities()).not.to.be.undefined;
        })

        it('should return a boolean', () => {
          expect(typeof theMember.hasManyActivities()).to.equal('boolean');
        })

        it('should return false if the number of activity is equal to zero.', () => {
          theMember = new Member('tao', null, null, null, null)
          expect(theMember.hasManyActivities()).to.equal(false);
        })
      })

    describe('Member.getActivities function', () => {
        var theMember
        beforeEach(() => {
          theMember = new Member()
        })

        it('should exist', () => {
          expect(theMember.getActivities()).not.to.be.undefined;
        })
  
        it('getActivities function should return', () => {
       expect(typeof theMember.getActivities()).to.deep.equal('string');
      })
    })
     
    describe('Activity', () => {
      var activity
      beforeEach(() => {
      activity = new Activity('name', 'place', new Date(2019, 5, 14), 'cost')
      })

      it('should return a string', () => {
        expect(typeof activity.toString()).to.equal('string');
      })

      it('should NOT be hard coded', () => {
        expect(activity.toString()).to.equal('name starts on 14/06/2019 at place');
      })
      
      it('toString function should return', () => {
        expect(typeof activity.toString()).to.deep.equal('string');
      })
    })
      
    // Beam, Jim\s[M05]\n\tFestival of Colour starts on 2018-11-07 at Hamilton\n\tEaster High Tea starts on 2018-12-10 at Wellington\n\tJoyride Carnival starts on 2019-05-02 at Auckland\n'
    describe('Display Busy Member function returns busy member format', () => {
      describe('The member\'s last name', () => {
        it('should be Beam', () => {
          let output = theClub.displayBusyMembers()
          expect(output).to.match(/^Beam/);
        })
      })

      describe('The punctuation after the last name', () => {
        it('should be a comma', () => {
          expect(theClub.displayBusyMembers()).to.match(/^Beam,/);
        })
      })

      describe('single space after puntuation', () => {
        it('should be a single space', () => {
          expect(theClub.displayBusyMembers()).to.match(/^Beam,\s/);
        })
      })
      
      describe('The member\'s first Name', () => {
        it('should be Main', () => {
          expect(theClub.displayBusyMembers()).to.match(/^Beam, Jim/);
        })
      })

      describe('The punctuation after the first name', () => {
        it('should be space after first name', () => {
          expect(theClub.displayBusyMembers()).to.match(/Jim\s/);
        })
      })

      describe('The id', () => {
        it('should be enclosed in []', () => {
          expect(theClub.displayBusyMembers()).to.match(/\[M05]/);
        })
      })

      describe('After the id', () => {
        it('should be a newline', () => {
          expect(theClub.displayBusyMembers()).to.match(/\[M05]\n/);
        })
      })

      describe('Each Activity\'s details', () => {
        it('should start with a tab \\t character', () => {
          expect(theClub.displayBusyMembers()).to.match(/\n\t/);
        })
      })

      describe('Member\'s first Activity', () => {
        let theClub = Controller.setup()
        let member = theClub.findMember('M05')
        member.sortActivities()
        let anActivity = member.allMyActivities[0]
        let output = anActivity.toString()

        it('and the activity name should be the Festival of Colour', () => {
          expect(output).to.match(/^Festival of Colour/);
        })

        it('should be a space after activity name', () => {
          expect(output).to.match(/Festival of Colour\s/);
        })

        it('should say starts on', () => {
          expect(output).to.match(/starts on/);
        })

        it('should be a single space', () => {
          expect(output).to.match(/starts on\s/);
        })

        it('should display start date', () => {
          expect(output).to.match(new RegExp('07/11/2018'));
        })

        it('should be a single space', () => {
          expect(output).to.match(/\s/);
        })

        it('should say at', () => {
          expect(output).to.match(/at/);
        })

        it('should be a single space', () => {
          expect(output).to.match(/at\s/);
        })

        it('should say Hamilton', () => {
          expect(output).to.match(/Hamilton/);
        })

        it('should line end here', () => {
          expect(theClub.displayBusyMembers()).to.match(/Hamilton\n\t/);
        })
      })

      describe('Member\'s second Activity', () => {
        let theClub = Controller.setup()
        let member = theClub.findMember('M05')
        member.sortActivities()
        let anActivity = member.allMyActivities[1]
        let output = anActivity.toString()

        it('and the activity name should be the Easter High Tea', () => {
          expect(output).to.match(/^Easter High Tea/);
        })

        it('should be a space after activity name', () => {
          expect(output).to.match(/Easter High Tea\s/);
        })

        it('should say starts on', () => {
          expect(output).to.match(/starts on/);
        })

        it('should be a single space', () => {
          expect(output).to.match(/starts on\s/);
        })
        
        it('should display start date', () => {
          expect(output).to.match(new RegExp('10/12/2018'));
        })

        it('should be a single space', () => {
          expect(output).to.match(/\s/);
        })

        it('should say at', () => {
          expect(output).to.match(/at/);
        })

        it('should be a single space', () => {
          expect(output).to.match(/at\s/);
        })

        it('should say Wellington', () => {
          expect(output).to.match(/Wellington/);
        })

        it('should line end here', () => {
          expect(theClub.displayBusyMembers()).to.match(/Wellington\n\t/);
        })
      })

      describe('Member\'s third Activity', () => {
        let theClub = Controller.setup()
        let member = theClub.findMember('M05')
        member.sortActivities()
        let anActivity = member.allMyActivities[2]
        let output = anActivity.toString()

        it('and the activity name should be the Joyride Carnival', () => {
          expect(output).to.match(/^Joyride Carnival/);
        })

        it('should be a space after activity name', () => {
          expect(output).to.match(/Joyride Carnival\s/);
        })      

        it('should say starts on', () => {
          expect(output).to.match(/starts on/);
        })

        it('should be a single space', () => {
          expect(output).to.match(/starts on\s/);
        })

        it('should display start date', () => {
          expect(output).to.match(new RegExp('05/02/2019'));
        })

        it('should be a single space', () => {
          expect(output).to.match(/\s/);
        })

        it('should say at', () => {
          expect(output).to.match(/at/);
        })

        it('should be a single space', () => {
          expect(output).to.match(/at\s/);
        })

        it('should say Auckland', () => {
          expect(output).to.match(/Auckland/);
        })

        it('should line end here', () => {
          expect(theClub.displayBusyMembers()).to.match(/Auckland\n/);
        })
      })
    })
  })
  describe('DisplayBusyMember function', () => {
    it('should work', () => {
      var theClub = Controller.setup() 
      expect(theClub.displayBusyMembers()).to.equal('Beam, Jim [M05]\n\tFestival of Colour starts on 07/11/2018 at Hamilton\n\tEaster High Tea starts on 10/12/2018 at Wellington\n\tJoyride Carnival starts on 05/02/2019 at Auckland\n');
    })
  })
})
