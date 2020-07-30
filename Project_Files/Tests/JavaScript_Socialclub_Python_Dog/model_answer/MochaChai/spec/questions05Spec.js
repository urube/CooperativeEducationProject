describe('Question Five', () => {
  'use strict'
  describe('write a Member.addActivity function to add the Activities', () => {
    var theClub
    beforeEach(() => {
      theClub = Controller.setup()
      theClub.sortMembers()
    })
    
    describe('Should have correct activity number', () => {
      it('Member M01 should have 1 Activity', () => {
        var theMember = theClub.findMember('M01')
        expect(theMember.allMyActivities.length).to.equal(1);
    })

    it('Member M05 should have 3 Activities', () => {
      var theMember = theClub.findMember('M05')
      expect(theMember.allMyActivities.length).to.equal(3);
    })

    it('Member M02 should have 1 Activity', () => {
      var theMember = theClub.findMember('M02')
      expect(theMember.allMyActivities.length).to.equal(1);
    })

    it('Member M04 should have 1 Activity', () => {
      var theMember = theClub.findMember('M04')
      expect(theMember.allMyActivities.length).to.equal(1);
    })
  })
    
    it('should have correct formate set of Activity details', () => {
      /*
        MemberID  Name                    Place       Start Date  Cost
        M01       Autumn Festival         Arrowtwon   01/01/2018  $0.00
        M05       Joyride Carnival        Auckland    05/02/2019  $300.00
        M05       Easter High Tea         Wellington  10/12/2018  $150.00
        M05       Festival of Colour      Hamilton    07/11/2018  $0.00
        M02       Wine and Food Festival  Napier      10/20/2020  $350.00
        M04       Music in Park           Hamilton    08/12/2018  $0.00
      */

      var anActivity, theMember
      theMember = theClub.findMember('M01')
           //   M01    Autumn Festival    Arrowtown    1/1/2018    0
      anActivity = theMember.allMyActivities[0]
      expect(anActivity).not.to.be.undefined;
      expect(anActivity.name).not.to.be.undefined;
      expect(anActivity.place).to.equal('Arrowtown');
      expect(anActivity.startDate).to.deep.equal(new Date(2018, 0, 1));
      expect(anActivity.cost).to.equal(0);

      theMember = theClub.findMember('M05')
      anActivity = theMember.sortActivities()
            //  M05     Festival of Colour      Hamilton    7/11/2018       0
      anActivity = theMember.allMyActivities[0]
      expect(anActivity).not.to.be.undefined;
      expect(anActivity.name).not.to.be.undefined;
      expect(anActivity.place).to.equal('Hamilton');
      expect(anActivity.startDate).to.deep.equal(new Date(2018, 10, 7));
      expect(anActivity.cost).to.equal(0);

      theMember = theClub.findMember('M05')
      anActivity = theMember.sortActivities()
            //  M05     Easter High Tea     Wellington      10/12/2018      150.00
      anActivity = theMember.allMyActivities[1]
      expect(anActivity).not.to.be.undefined;
      expect(anActivity.name).not.to.be.undefined;
      expect(anActivity.place).to.equal('Wellington');
      expect(anActivity.startDate).to.deep.equal(new Date(2018, 11, 10));
      expect(anActivity.cost).to.equal(150.00);

      theMember = theClub.findMember('M05')
      anActivity = theMember.sortActivities()
            //  M05   Joyride Carnival      Auckland    5/2/2019    300.00
      anActivity = theMember.allMyActivities[2]
      expect(anActivity).not.to.be.undefined;
      expect(anActivity.name).not.to.be.undefined;
      expect(anActivity.place).to.equal('Auckland');
      expect(anActivity.startDate).to.deep.equal(new Date(2019, 1, 5));
      expect(anActivity.cost).to.equal(300.00);

      theMember = theClub.findMember('M02')
      anActivity = theMember.sortActivities()
            //  M02     Wine and Food Festival      Napier      10/02/2020  350.00
      anActivity = theMember.allMyActivities[0]
      expect(anActivity).not.to.be.undefined;
      expect(anActivity.name).not.to.be.undefined;
      expect(anActivity.place).to.equal('Napier');
      expect(anActivity.startDate).to.deep.equal(new Date(2020, 1, 10));
      expect(anActivity.cost).to.equal(350.00);

      theMember = theClub.findMember('M04')
      anActivity = theMember.sortActivities()
            //  M04     Music in Park       Hamilton        8/12/2018       0
      anActivity = theMember.allMyActivities[0]
      expect(anActivity).not.to.be.undefined;
      expect(anActivity.name).not.to.be.undefined;
      expect(anActivity.place).to.equal('Hamilton');
      expect(anActivity.startDate).to.deep.equal(new Date(2018, 11, 8));
      expect(anActivity.cost).to.equal(0);
    })
  })
})