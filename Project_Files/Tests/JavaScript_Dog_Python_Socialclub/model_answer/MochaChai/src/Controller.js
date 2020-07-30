class Controller  {
  static setup  () {
    var theKennel
    theKennel = new Kennel()
    // ADD CODE HERE TO CREATE THE DogOWNERS
    theKennel.addDogOwner('BMC', 'Brad', 'McCaw', new Date(1982, 11, 12))
    theKennel.addDogOwner('RTH', 'Richie', 'Thorn', new Date(1980, 4, 8))
    theKennel.addDogOwner('DEL', 'Dan', 'Ellis', new Date(1984, 1, 16))
    theKennel.addDogOwner('ACR', 'Andrew', 'Carter', new Date(1987, 10, 30))
    /*
      BMC   Brad    McCaw   12/13/1982
      RTH   Richie  Thorn   8/05/1980
      DEL   Dan     Ellis   16/02/1984
      ACR   Andrew  Carter  30/11/1987
    */


    //ADD CODE HERE TO CREATE THE Dog
    let theDogOwner = theKennel.findDogOwner('BMC')
    //console.log(theDogOwner)
    theDogOwner.addDog('Speedy', 'Pomeranian', 'N', 'Ekanuba')
    
    theDogOwner = theKennel.findDogOwner('RTH')
    theDogOwner.addDog('Victor', 'Beagle', 'M', 'Chef')

    theDogOwner = theKennel.findDogOwner('RTH')
    theDogOwner.addDog('Killer', 'Mastiff', 'N', 'Purina')
    
    theDogOwner = theKennel.findDogOwner('DEL')
    theDogOwner.addDog('Ruftero', 'Poodle', 'F', 'Ekanuba')
    
    theDogOwner = theKennel.findDogOwner('DEL')
    theDogOwner.addDog('Sausage', 'Dachshund', 'F', 'Purina')
    
    theDogOwner = theKennel.findDogOwner('ACR')
    theDogOwner.addDog('Random', 'Mastiff', 'F', 'Cat')
  
    /*
    DogOwner ID     Name         Breed         Gender      Favorite Food
      BMC          Speedy     Pomeranian        N           Ekanuba
      RTH          Victor      Beagle           M           Chef
      RTH          Killer      Mastiff          N           Purina
      DEL          Ruftero     Poodle           F           Ekanuba
      DEL          Sausage    Dachshund         F           Purina
      ACR          Random      Mastiff          F            Cat
  */
    return theKennel
  }
}