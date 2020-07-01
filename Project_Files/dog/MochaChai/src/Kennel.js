class Kennel {
  constructor () {
    this.allMyDogOwners = []
  }

  addDogOwner (newId, newFirstName, newLastName, newBirthDate) {
    var newDogOwner = new DogOwner(newId, newFirstName, newLastName, newBirthDate, this)
    this.allMyDogOwners.push(newDogOwner)
  }

  findDogOwner (targetOwnerId) {
    return this.allMyDogOwners.find(aDogOwner => aDogOwner.id === targetOwnerId)
  }

  sortDogOwners  () {
    this.allMyDogOwners.sort(function (a, b) {
      if (Number(a.id) > Number(b.id)){
        return 1
      }
      if (Number(a.id) < Number(b.id)){
        return -1
      }
      if (Number(a.id) === Number(b.id)){
        return 0
      }
    })
  }
  getDogOwners () {
    let result = ''
    this.sortDogOwners()
    for (let aDogOwner of this.allMyDogOwners){
      result += aDogOwner + '\n'
    }
    return result
  }
  getThoseWithManyDogs () {
    let result = ''
    this.sortDogOwners()
    for (let aDogOwner of this.allMyDogOwners){
      if (aDogOwner.hasOneDog()) {
        result += aDogOwner + '\n'
        result += aDogOwner.getDogs()
      }
    }
    return result
  }
}