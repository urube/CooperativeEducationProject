class DogOwner {
  constructor (newId, newFirstName, newLastName, newBirthDate, theKennel) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.birthDate = newBirthDate
    this.myKennel = theKennel
    this.allMyDogs = []
  }
  sortDogs () {
    this.allMyDogs.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      if (a.name === b.name) {
        return 0
      }
    })
  }
  toString () {
    return this.firstName + ', ' + this.lastName + ' [' + this.id + ']'
  }
  addDog (newName, newBreed, newGender, newFavoriteFood) {
    let newDog = new Dog(this, newName, newBreed, newGender, newFavoriteFood)
    this.allMyDogs.push(newDog)
  }
  hasOneDog () {
    return this.allMyDogs.length == 1
  }
  getDogs () {
    let result = ''
    for ( let aDog of this.allMyDogs ) {
      result += '\t' + aDog + '\n'
    }
    return result
  }
}