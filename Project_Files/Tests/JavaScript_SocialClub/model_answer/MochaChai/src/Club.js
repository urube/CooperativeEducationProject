class Club {
  constructor () {
    this.allMyMembers = []
  }
  addMember (newId, newFirstName, newLastName, newBirthDate) {
    let newMember = new Member(newId, newFirstName, newLastName, newBirthDate)
    this.allMyMembers.push(newMember)
  }
  findMember (targetMemberId) {
    return this.allMyMembers.find(aMember => aMember.id === targetMemberId)
  }
  sortMembers () {
    this.allMyMembers.sort(function(a, b){
      if (a.id < b.id){
        return -1
      }
      if (a.id > b.id){
        return 1
      }
      return 0
    })
  }
  displayMembers () {
    let result = ''
    this.sortMembers()
    for (let aMember of this.allMyMembers) {
      result += aMember + '\n'
    }
    return result
  }
  displayBusyMembers () {
    let result = ''
    this.sortMembers()
    for (let aMember of this.allMyMembers) {
      if (aMember.hasManyActivities()) {
        result += aMember + '\n'
        result += aMember.getActivities()
      }
    }
    return result
  }
}
