/* global describe beforeEach Controller it expect Dog */
describe('Question Four and Question Five', () => {
  'use strict'
  describe('Dog', () => {
    let dog
    beforeEach(() => {
      dog = new Dog()
    })

    it('should have a .myDogOwner reference', () => {
      expect(dog.hasOwnProperty('myDogOwner')).to.be.ok;
    })

    it('should have a .name property', () => {
      expect(dog.hasOwnProperty('name')).to.be.ok;
    })

    it('should have a .breed property', () => {
      expect(dog.hasOwnProperty('breed')).to.be.ok;
    })

    it('should have a .gender property', () => {
      expect(dog.hasOwnProperty('gender')).to.be.ok;
    })

    it('should have a .favoriteFood property', () => {
      expect(dog.hasOwnProperty('favoriteFood')).to.be.ok;
    })
  })

  describe('write a DogOwner.addDog function to add the Dogs', () => {
    var theKennel
    beforeEach(() => {
      theKennel = Controller.setup()
    })

    it('DogOwner ACR should have 1 Dog', () => {
      var theDogOwner = theKennel.findDogOwner('ACR')
      expect(theDogOwner.allMyDogs.length).to.equal(1);
    })

    it('DogOwner BMC should have 1 Dog', () => {
      var theDogOwner = theKennel.findDogOwner('BMC')
      expect(theDogOwner.allMyDogs.length).to.equal(1);
    })

    it('DogOwner RTH should have 2 Dogs', () => {
      var theDogOwner = theKennel.findDogOwner('RTH')
      expect(theDogOwner.allMyDogs.length).to.equal(2);
    })

    it('DogOwner DEL should have 2 Dog', () => {
      var theDogOwner = theKennel.findDogOwner('DEL')
      expect(theDogOwner.allMyDogs.length).to.equal(2);
    })

    it('should correctly set Dog details', () => {
            /*
    Owner ID    Name      Breed          Gender    Favorite Food

    BMC          Speedy     Pomeranian        N           Ekanuba
    RTH          Victor      Beagle           M           Chef
    RTH          Killer      Mastiff          N           Purina
    DEL          Ruftero     Poodle           F           Ekanuba
    DEL          Sausage    Dachshund         F           Purina
    ACR          Random      Mastiff          F            Cat
         */
      var aDog, theDogOwner
      theDogOwner = theKennel.findDogOwner('ACR')
            // ACR    Ruftero    Mastiff  F    Cat
      aDog = theDogOwner.allMyDogs[0]
      expect(aDog.myDogOwner).to.deep.equal(theDogOwner);
      expect(aDog.name).to.equal('Random');
      expect(aDog.breed).to.equal('Mastiff');
      expect(aDog.gender).to.equal('F');
      expect(aDog.favoriteFood).to.equal('Cat');

      theDogOwner = theKennel.findDogOwner('BMC')
            // BMC  Speedy      Pomeranian   N  Ekanuba
      aDog = theDogOwner.allMyDogs[0]
      expect(aDog.myDogOwner).to.deep.equal(theDogOwner);
      expect(aDog.name).to.equal('Speedy');
      expect(aDog.favoriteFood).to.equal('Ekanuba');
      expect(aDog.breed).to.equal('Pomeranian');
      expect(aDog.gender).to.equal('N');

      theDogOwner = theKennel.findDogOwner('DEL')
      aDog = theDogOwner.sortDogs()
            // DEL      Ruftero       Poodle         F     Ekanuba
            // DEL      Sausage    Dachshund         F     Purina
      aDog = theDogOwner.allMyDogs[0]
      expect(aDog.myDogOwner).to.deep.equal(theDogOwner);
      expect(aDog.name).to.equal('Ruftero');
      expect(aDog.favoriteFood).to.equal('Ekanuba');
      expect(aDog.breed).to.equal('Poodle');
      expect(aDog.gender).to.equal('F');

      aDog = theDogOwner.allMyDogs[1]
      expect(aDog.myDogOwner).to.deep.equal(theDogOwner);
      expect(aDog.name).to.equal('Sausage');
      expect(aDog.favoriteFood).to.equal('Purina');
      expect(aDog.breed).to.equal('Dachshund');
      expect(aDog.gender).to.equal('F');

      theDogOwner = theKennel.findDogOwner('RTH')
      aDog = theDogOwner.sortDogs()
          //RTH          Victor      Beagle           M           Chef
          //RTH          Killer      Mastiff          N           Purina
      aDog = theDogOwner.allMyDogs[1]
      expect(aDog.myDogOwner).to.deep.equal(theDogOwner);
      expect(aDog.name).to.equal('Victor');
      expect(aDog.favoriteFood).to.equal('Chef');
      expect(aDog.breed).to.equal('Beagle');
      expect(aDog.gender).to.equal('M');

      aDog = theDogOwner.allMyDogs[0]
      expect(aDog.myDogOwner).to.deep.equal(theDogOwner);
      expect(aDog.name).to.equal('Killer');
      expect(aDog.favoriteFood).to.equal('Purina');
      expect(aDog.breed).to.equal('Mastiff');
      expect(aDog.gender).to.equal('N');
    })
  })
})
