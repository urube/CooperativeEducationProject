/* global describe beforeEach it expect Member */
describe('Question Six', () => {
  'use strict'
  describe('Member.hasManyActivities function', () => {
    var theMember
    beforeEach(() => {
      theMember = new Member()
    })

    it('should exist', () => {
      expect(theMember.hasManyActivities).not.to.be.undefined;
    })

    it('should return a boolean', () => {
      expect(typeof theMember.hasManyActivities()).to.equal('boolean');
    })

    it('should return false if the number of activity is equal to zero.', () => {
      theMember = new Member('tao', null, null, null, null)
      expect(theMember.hasManyActivities()).to.equal(false);
    })

    it('should return false if the number of activity is equal to one', () => {
      theMember = new Member('tao', null, null, null, null)
      theMember.addActivity(null, null, null, null)
      expect(theMember.hasManyActivities()).to.equal(false);
    })

    it('should return true if the number of activity is more than one.', () => {
      theMember = new Member('tao', null, null, null, null)
      theMember.addActivity(null, null, null, null)
      theMember.addActivity(null, null, null, null)
      expect(theMember.hasManyActivities()).to.equal(true);
    })

    it('should return true if the number of activity is more than two', () => {
      theMember = new Member('tao', null, null, null, null)
      theMember.addActivity(null, null, null, null)
      theMember.addActivity(null, null, null, null)
      theMember.addActivity(null, null, null, null)
      expect(theMember.hasManyActivities()).to.equal(true);
    })
  })
})
