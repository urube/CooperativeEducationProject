class Member {
  constructor (newId, newFirstName, newLastName, newBirthDate) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.birthDate = newBirthDate
    this.allMyActivities = []
  }
  toString () {
    return `${this.lastName}, ${this.firstName} [${this.id}]`
  }
  addActivity (newName, newPlace, newStartDate, newCost) {
    let anActivity = new Activity(newName, newPlace, newStartDate, newCost)
    this.allMyActivities.push(anActivity)
  }
  sortActivities () {
    this.allMyActivities.sort(function (a, b) {
      return a.startDate - b.startDate
    })
  }
  hasManyActivities () {
    return this.allMyActivities.length > 1
  }
  getActivities () {
    let result = ''
    this.sortActivities()
    for (let anActivity of this.allMyActivities) {
      result += '\t' + anActivity + '\n'
    }
    return result
  }
}
