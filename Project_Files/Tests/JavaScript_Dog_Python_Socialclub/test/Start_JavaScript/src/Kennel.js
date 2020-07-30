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
}