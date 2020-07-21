class Cattery {
  constructor () {
    this.allMyCatOwners = []
  }

  addCatOwner (newId, newFirstName, newLastName, newAmountOwed) {
    var newCatOwner = new CatOwner(newId, newFirstName, newLastName, newAmountOwed, this)
    this.allMyCatOwners.push(newCatOwner)
  }

  findCatOwner (targetOwnerId) {
    return this.allMyCatOwners.find(aCatOwner => aCatOwner.id === targetOwnerId)
  }

  sortCatOwners  () {
    this.allMyCatOwners.sort(function (a, b) {
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