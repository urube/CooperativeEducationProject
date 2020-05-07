class Donor {
  constructor (newNationalId, newFirstName, newLastName, newGender) {
    this.nationalId = newNationalId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.gender = newGender
    this.allMyDonations = []
  }
  hasPositiveBloodGroup () {
    let result = false
    for (let aDonation of this.allMyDonations) {
      if (aDonation.bloodGroup[aDonation.bloodGroup.length - 1] === '+') {
        result = true
        break
      }
    }
    return result
  }
  sortDonations () {
    this.allMyDonations.sort(function (a, b) {
      return a.donationDate - b.donationDate
    })
  }
  addDonation (newBranchName, newTown, newWhen, newBloodGroup) {
    let aNewDonation = new Donation(newBranchName, newTown, newWhen, newBloodGroup)
    this.allMyDonations.push(aNewDonation)
  }
  toString () {
    return `${this.lastName}, ${this.firstName} [${this.gender}]`
  }
  getDonations() {
    let result = '';
    for (let aDonation of this.allMyDonations) {
      if (aDonation.bloodGroup[aDonation.bloodGroup.length - 1] === '+') {
          result += '\t' + aDonation + '\n'
      }
    }
    return result
    // let result = '';
    // for (let aDonation of this.allMyDonations) {
    //   if (aDonation = hasPositiveBloodGroup()) {
    //     result = aDonation.toString()
    //   }
    // }
    // return result
  }
}
