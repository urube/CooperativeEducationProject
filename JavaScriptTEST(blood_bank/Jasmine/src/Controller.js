/* global BloodBank */
class Controller {
  static setup () {
    var theBloodBank = new BloodBank()
    /*
    NationalId  First Name  Last Name  Gender
    9800100     Jonathan    Watts       M
    4023500     Sandy       Moore       F
    7906553     John        Burk        M
    5000990     Daniel      McDonald    M
    6896701     Cathy       Watson      F
    */
    // ADD CODE BELOW HERE FOR QUESTION 2
    theBloodBank.addDonor(9800100, 'Jonathan', 'Watts', 'M')
    theBloodBank.addDonor(4023500, 'Sandy', 'Moore', 'F')
    theBloodBank.addDonor(7906553, 'John', 'Burk', 'M')
    theBloodBank.addDonor(5000990, 'Daniel', 'McDonald', 'M')
    theBloodBank.addDonor(6896701, 'Cathy', 'Watson', 'F')
    
    /*
    NationalId   BranchName     Town      DonationDate    BloodGroup
    4023500      Christchurch  Addington  01/12/2018      AB+
    5000990      Wellington    Newtown    30/08/2017      O-
    6896701      Auckland      Manuka     11/07/2019      O+
    7906553      North Shore   Takapuna   15/12/2016      B-
    9800100      Nelson        Tahunanui  09/11/2017      AB+
    9800100      Otago         Dunedin    05/10/2018      AB+
    */
    var aDonor
    aDonor = theBloodBank.findDonor(4023500)
    aDonor.addDonation('Christchurch', 'Addington', new Date(2018, 11, 1), 'AB+')
    
    aDonor = theBloodBank.findDonor(5000990)
    aDonor.addDonation('Wellington', 'Newtown', new Date(2017, 7, 11), 'O-')
    
    aDonor = theBloodBank.findDonor(6896701)
    aDonor.addDonation('Auckland', 'Manuka', new Date(2019, 6, 15), 'O+')
    
    aDonor = theBloodBank.findDonor(7906553)
    aDonor.addDonation('North Shore', 'Tahunanui', new Date(2016, 11, 9), 'B-')
    
    aDonor = theBloodBank.findDonor(9800100)
    aDonor.addDonation('Nelson', 'Tahunanui', new Date(2017, 10, 9), 'AB+')
    aDonor.addDonation('Otago', 'Dunedin', new Date(2018, 9, 5), 'AB+')

    return theBloodBank
  }
}