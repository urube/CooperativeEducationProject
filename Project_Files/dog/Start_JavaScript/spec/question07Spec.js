/* global describe beforeEach Controller it expect Kennel */
describe('Question Seven', () => {
    var theKennel
    beforeEach(() => {
      theKennel = Controller.setup()
    })
  describe('Kennel.getThoseWithManyDogs function', () => {
    it('should return a string', () => {
      expect(typeof theKennel.getThoseWithManyDogs()).to.equal('string');
    })
    it('should NOT be hard coded', () => {
      theKennel = new Kennel()
      expect(theKennel.getThoseWithManyDogs()).to.equal('');
    })
    
    //'Brad, McCaw [BMC]\n\tSpeedy (N) aka Ekanuba\n\tFluffy (M) aka Grey ghost\n\tInky (F) aka The Talker\n')
    describe('The owner\'s first name', () => {
      it('should be Brad', () => {
        let output = theKennel.getThoseWithManyDogs()
        expect(output).to.match(/^Brad/);
      })
    })
    
    describe('The punctuation after the first name', () => {
      it(' should be a comma and then a space', () => {
        expect(theKennel.getThoseWithManyDogs()).to.match(/^Brad,\s/);
      })
    })
    
    describe('The second name', () => {
      it('should be McCaw', () => {
        expect(theKennel.getThoseWithManyDogs()).to.match(/^Brad, McCaw/);
      })
    })
    
    describe('The punctuation after the second name', () => {
      it('should just be a space', () => {
        expect(theKennel.getThoseWithManyDogs()).to.match(/McCaw\s/);
      })
    })
    
    describe('The id ', () => {
      it('should have BMC enclosed in [] ie [BMC]', () => {
        expect(theKennel.getThoseWithManyDogs()).to.match(/\[BMC\]/);
      })
    })
    
    describe('After the id', () => {
      it('should be a newline', () => {
        expect(theKennel.getThoseWithManyDogs()).to.match(/\[BMC\]\n/);
      })
    })
    
    describe('Each Dog\'s details', () => {
      it('should start with a tab \\t character', () => {
        expect(theKennel.getThoseWithManyDogs()).to.match(/\n\t/);
      })
    })
    
    describe('Brad\'s first Dog', () => {
      let theKennel = Controller.setup()
      let owner = theKennel.findDogOwner('BMC')
      owner.sortDogs()
      let theDog = owner.allMyDogs[0]
      let output = theDog.toString()
      it('should be the Speedy', () => {
        expect(output).to.match(/^Speedy/);
      })
      it('and should be neutered', () => {
        expect(output).to.match(/\s\(N\)\s/);
      })
      it ('should say the Pomeranian who likes to eat ', () => {
        expect(output).to.match(/the Pomeranian who likes to eat /)
      })
      it('with favorite food of \'Ekanuba\'', () => {
        expect(output).to.match(/Ekanuba$/);
      })
    })
    describe('Andrew\'s first Dog', () => {
      let theKennel = Controller.setup()
      let owner = theKennel.findDogOwner('ACR')
      owner.sortDogs()
      let theDog = owner.allMyDogs[0]
      let output = theDog.toString()
      it('should be the Random', () => {
        expect(output).to.match(/^Random/);
      })
      it('and should be female', () => {
        expect(output).to.match(/\s\(F\)\s/);
      })
      it ('should say the Mastiff who likes to eat ', () => {
        expect(output).to.match(/the Mastiff who likes to eat /)
      })
      it('with favorite food of \'Cat\'', () => {
        expect(output).to.match(/Cat$/);
      })
    })
  })  
})
