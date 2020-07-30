class Activity {
  constructor (newName, newPlace, newStartDate, newCost) {
    this.name = newName
    this.place = newPlace
    this.startDate = newStartDate
    this.cost = newCost
  }
  toString () {
    return `${this.name} starts on ${this.startDate.toLocaleDateString()} at ${this.place}`
  }
}
