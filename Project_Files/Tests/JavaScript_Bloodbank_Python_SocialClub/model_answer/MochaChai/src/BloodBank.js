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
  displayDonors () {
    this.sortDonors()
    let result = ''
    for (let aDonor of this.allMyDonors) {
      result += aDonor + '\n'
    }
    return result
  }
  displayPositiveDonations () {
    this.sortDonors();
    let result ='';
    for (let aDonor of this.allMyDonors) {
      if(aDonor.hasPositiveBloodGroup()) {
        result += aDonor + '\n'
        result += aDonor.getDonations()
      }
      // if(aDonor.hasPositiveBloodGroup()) {
      //   aDonor.sortDonations()
      //   result += aDonor.getDonations()
      // }
    }
    return result
  }
}
