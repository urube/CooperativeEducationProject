class CatOwner {
  constructor (newId, newFirstName, newLastName, newAmountOwed, theCattery) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.amountOwed = newAmountOwed
    this.myCattery = theCattery
    this.allMyCats = []
  }
  sortCats () {
    this.allMyCats.sort(function (a, b) {
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
  addCat (newName, newBreed, newGender, newSecretName) {
    let newCat = new Cat(this, newName, newBreed, newGender, newSecretName)
    this.allMyCats.push(newCat)
  }
  hasManyCats () {
    return this.allMyCats.length > 2
  }
  getCats () {
    let result = ''
    for ( let aCat of this.allMyCats ) {
      result += '\t' + aCat + '\n'
    }
    return result
  }
}