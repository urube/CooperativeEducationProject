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
}
