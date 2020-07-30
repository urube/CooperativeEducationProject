class Member {
  constructor (newId, newFirstName, newLastName, newBirthDate) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.birthDate = newBirthDate
    this.allMyActivities = []
  }
  sortActivities () {
    this.allMyActivities.sort(function (a, b) {
      return a.startDate - b.startDate
    })
  }
}
