class Donation {s
  constructor (newBranchName, newTown, newWhen, newBloodGroup) {
    // add some code here
    this.branchName = newBranchName
    this.town = newTown
    this.when = newWhen
    this.bloodGroup = newBloodGroup
  }
  toString() {
  	return `${this.branchName}, ${this.town}, ${this.when}, ${this.bloodGroup}` 
  }
  getDonations() {
  	return this.bloodGroup === '+'
  }
  toString () {
    return `Has blood group <${this.bloodGroup}> donated on ${this.when} at ${this.branchName}\n\t` 
  }
}