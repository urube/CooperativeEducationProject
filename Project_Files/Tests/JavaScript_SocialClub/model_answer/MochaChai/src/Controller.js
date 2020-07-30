/* global Club */
class Controller {
  static setup () {
    var theClub = new Club()
    /*
      ID   First Name Last Name  Birth Date
      M02  Mary       Shelly     17/01/1981
      M04  Melvin     Dean       08/08/2000
      M05  Jim        Beam       27/12/1980
      M01  Carla      Main       11/07/1980
      M03  James      Bean       15/08/2001
    */
    // ADD CODE BELOW HERE
    theClub.addMember('M02', 'Mary', 'Shelly', new Date(1981, 0, 17))
    theClub.addMember('M04', 'Melvin', 'Dean', new Date(2000, 7, 8))
    theClub.addMember('M05', 'Jim', 'Beam', new Date(1980, 11, 27))
    theClub.addMember('M01', 'Carla', 'Main', new Date(1980, 6, 11))
    theClub.addMember('M03', 'James', 'Bean', new Date(2001, 7, 15))
    /*
      MemberID   Name                     Place       Start Date  Cost
      M01        Autumn Festival          Arrowtown   01/01/2018  $0.00
      M05        Joyride Carnival         Auckland    05/02/2019  $300.00
      M05        Easter High Tea          Wellington  10/12/2018  $150.00
      M05        Festival of Colour       Hamilton    07/11/2018  $0.00
      M02        Wine and Food Festival   Napier      10/02/2020  $350.00
      M04        Music in Park            Hamilton    08/12/2018  $0.00
    */
    // ADD CODE BELOW HERE
    let aMember = theClub.findMember('M01')
    aMember.addActivity('Autumn Festival', 'Arrowtown', new Date(2018, 0, 1), 0)

    aMember = theClub.findMember('M05')
    aMember.addActivity('Joyride Carnival', 'Auckland', new Date(2019, 1, 5), 300.00)
    aMember.addActivity('Easter High Tea', 'Wellington', new Date(2018, 11, 10), 150.00)
    aMember.addActivity('Festival of Colour', 'Hamilton', new Date(2018, 10, 7), 0)

    aMember = theClub.findMember('M02')
    aMember.addActivity('Wine and Food Festival', 'Napier', new Date(2020, 1, 10), 350.00)

    aMember = theClub.findMember('M04')
    aMember.addActivity('Music In Park', 'Hamilton', new Date(2018, 11, 8), 0)
    
    return theClub
  }
}
