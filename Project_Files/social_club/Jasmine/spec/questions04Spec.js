/* global describe beforeEach Controller it expect Activity */
describe('Question Four', () => {
  'use strict'
  describe('Activity Property', () => {
    var activity
    beforeEach(() => {
      activity = new Activity()
    })
    
    it('should have a .name property', () => {
      expect(activity.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a .place property', () => {
      expect(activity.hasOwnProperty('place')).toBeTruthy()
    })

    it('should have a .startDate property', () => {
      expect(activity.hasOwnProperty('startDate')).toBeTruthy()
    })

    it('should have a .cost property', () => {
      expect(activity.hasOwnProperty('cost')).toBeTruthy()
    })
	})
  
  describe('addActivity exists', () => {
     var theMember
    beforeEach(() => {
      theMember = new Member()
    })
    
    it('should have an .addActivity function', () => {
      expect(typeof theMember.addActivity).toBe('function')
    })
    
    it ('should increase activity when new activity added', () => {
      var theMember =  new Member('A', 'B', new Date(2018, 1, 1), 0)
      theMember.addActivity('name1', 'place1', 'start_date', 'cost1')
      expect(theMember.allMyActivities.length).toBe(1)
      theMember.addActivity('name2', 'place2', 'start_date', 'cost2')
      expect(theMember.allMyActivities.length).toBe(2)
    })
  })    
})
  
  
  
