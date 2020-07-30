class BloodBank {
  constructor () {
    this.allMyDonors = []
  }
  addDonor (newNationalId, newFirstName, newLastName, newGender) {
    var aDonor = new Donor(newNationalId, newFirstName, newLastName, newGender)
    this.allMyDonors.push(aDonor)
  }
  findDonor (targetNationalId) {
    return this.allMyDonors.find(aDonor => aDonor.nationalId === targetNationalId)
  }
  sortDonors () {
    this.allMyDonors.sort(function (a,b) {return a.nationalId-b.nationalId})
  }
}
