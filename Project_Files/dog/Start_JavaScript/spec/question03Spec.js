/* global describe beforeEach Controller it expect Kennel */
describe('Question Three', () => {
  'use strict'
  describe('Kennel.getDogOwners function', () => {
    let theKennel
    beforeEach(() => {
      theKennel = Controller.setup()
    })
    it('should return a string', () => {
      expect(typeof theKennel.getDogOwners()).to.equal('string');
    })
    it('should NOT be hard coded', () => {
      theKennel = new Kennel()
      expect(theKennel.getDogOwners()).to.equal('');
    })
  
  // 'Brad, McCaw [BMC]\nRichie, Thorn [RTH]\nDan, Ellis [DEL]\nAndrew, Carter [ACR]\n'
    describe('Should return correctly formatted data', () => {
      describe('Should start with the first names but be sorted in ID order', () => {
        it('First Brad then Richie then Dan then Andrew', () => {
          let output = theKennel.getDogOwners()
          expect(output).to.match(/^Brad.*\nRichie.*\nDan.*\nAndrew.*\n/);
        })
      })
      describe('Puntuation after each first name', () => {
        it('should be a comma followed by a single space', () => {
          let output = theKennel.getDogOwners()
          expect(output).to.match(/^Brad,\s.*\nRichie,\s.*\nDan,\s.*\nAndrew,\s.*\n/);
        })
      })
      describe('last names', () => {
        it('should be McCaw, then Thorn, then Ellis and finally Carter', () => {
          let output = theKennel.getDogOwners()
          expect(output).to.match(/.*McCaw.*\n.*Thorn.*\n.*Ellis.*\n.*Carter.*/);
        })
      })
      describe('Puntuation after the last names', () => {
        it('should be a space', () => {
          expect(theKennel.getDogOwners()).to.match(/[\.\s]/);
        })
      })
      describe('the IDs', () => {
        it('should have digits enclosed in the square brackets ie []', () => {
          expect(theKennel.getDogOwners()).to.match(/\[...]/);
        })
      })
      describe('end of each owner\'s details', () => {
        it('should end with the newline character', () => {
          
          expect(theKennel.getDogOwners()).to.match(/\n/);
        })
      })    
    })
  })
})
