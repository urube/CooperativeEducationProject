/* global describe beforeEach Controller it expect Cat */
describe('Question Four and Question Five', () => {
  'use strict'
  describe('Cat', () => {
    let cat
    beforeEach(() => {
      cat = new Cat()
    })

    it('should have a .myCatOwner reference', () => {
      expect(cat.hasOwnProperty('myCatOwner')).to.be.ok;
    })

    it('should have a .name property', () => {
      expect(cat.hasOwnProperty('name')).to.be.ok;
    })

    it('should have a .breed property', () => {
      expect(cat.hasOwnProperty('breed')).to.be.ok;
    })

    it('should have a .gender property', () => {
      expect(cat.hasOwnProperty('gender')).to.be.ok;
    })

    it('should have a .secretName property', () => {
      expect(cat.hasOwnProperty('secretName')).to.be.ok;
    })
  })

  describe('write a CatOwner.addCat function to add the Cats', () => {
    var theCattery
    beforeEach(() => {
      theCattery = Controller.setup()
    })

    it('CatOwner 4 should have 1 Cat', () => {
      var theCatOwner = theCattery.findCatOwner('4')
      expect(theCatOwner.allMyCats.length).to.equal(1);
    })

    it('CatOwner 7 should have 1 Cat', () => {
      var theCatOwner = theCattery.findCatOwner('7')
      expect(theCatOwner.allMyCats.length).to.equal(1);
    })

    it('CatOwner 23 should have 3 Cats', () => {
      var theCatOwner = theCattery.findCatOwner('23')
      expect(theCatOwner.allMyCats.length).to.equal(3);
    })

    it('CatOwner 165 should have 1 Cat', () => {
      var theCatOwner = theCattery.findCatOwner('165')
      expect(theCatOwner.allMyCats.length).to.equal(1);
    })

    it('should correctly set cat details', () => {
            /*
    Owner ID    Name      Breed          Gender    Secret Name

     7          Art      Abyssianian       N      The Underwear Thief
     23        Fluffy     Persian          M       Grey ghost
     23        Blackey   Common Domestic   N       Her Majesty
     23         Inky       Persian         F       The Talker
     4          Meta        Tabby          F    Mouse's worse nightmare
     165      Random       Siamese         F     The One-Eyed Horror
            */
      var aCat, theCatOwner
      theCatOwner = theCattery.findCatOwner('4')
      aCat = theCatOwner.sortCats()
            // 4    Meta    Tabby  F    Mouse's worse nightmare
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).to.deep.equal(theCatOwner);
      expect(aCat.name).to.equal('Meta');
      expect(aCat.secretName).to.equal('Mouse\'s worse nightmare');
      expect(aCat.breed).to.equal('Tabby');
      expect(aCat.gender).to.equal('F');

      theCatOwner = theCattery.findCatOwner('7')
      aCat = theCatOwner.sortCats()
            // 7  Art      Abyssianian   N  The Underwear Thief
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).to.deep.equal(theCatOwner);
      expect(aCat.name).to.equal('Art');
      expect(aCat.secretName).to.equal('The Underwear Thief');
      expect(aCat.breed).to.equal('Abyssianian');
      expect(aCat.gender).to.equal('N');

      theCatOwner = theCattery.findCatOwner('165')
      aCat = theCatOwner.sortCats()
            // 165      Random       Siamese         F     The One-Eyed Horror
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).to.deep.equal(theCatOwner);
      expect(aCat.name).to.equal('Random');
      expect(aCat.secretName).to.equal('The One-Eyed Horror');
      expect(aCat.breed).to.equal('Siamese');
      expect(aCat.gender).to.equal('F');

      theCatOwner = theCattery.findCatOwner('23')
      aCat = theCatOwner.sortCats()
            // 23     Blackey   Common Domestic   N       Her Majesty
            // 23     Fluffy     Persian          M       Grey ghostj
            // 23       Inky       Persian         F       The Talker
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).to.deep.equal(theCatOwner);
      expect(aCat.name).to.equal('Blackey');
      expect(aCat.secretName).to.equal('Her Majesty');
      expect(aCat.breed).to.equal('Common Domestic');
      expect(aCat.gender).to.equal('N');

      aCat = theCatOwner.allMyCats[1]
      expect(aCat.myCatOwner).to.deep.equal(theCatOwner);
      expect(aCat.name).to.equal('Fluffy');
      expect(aCat.secretName).to.equal('Grey ghost');
      expect(aCat.breed).to.equal('Persian');
      expect(aCat.gender).to.equal('M');

      aCat = theCatOwner.allMyCats[2]
      expect(aCat.myCatOwner).to.deep.equal(theCatOwner);
      expect(aCat.name).to.equal('Inky');
      expect(aCat.secretName).to.equal('The Talker');
      expect(aCat.breed).to.equal('Persian');
      expect(aCat.gender).to.equal('F');
    })
  })
})
