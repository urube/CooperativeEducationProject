class Controller  {
  static setup  () {
    var theCattery
    theCattery = new Cattery()
    // ADD CODE HERE TO CREATE THE CATOWNERS
    theCattery.addCatOwner('7', 'Ruth', 'George', 12.34)
    theCattery.addCatOwner('23', 'Casey', 'van Dyke', 34.56)
    theCattery.addCatOwner('4', 'Temepara', 'Williams', 12.56)
    theCattery.addCatOwner('165', 'Irene', 'Aitkin', 56.12)
    /*
      ID    First Name   Last Name   Amount Owed
      7        Ruth      George      $12.34
      23      Casey      van Dyke    $34.56
      4      Temepara   Williams    $12.56
      165     Irene     Aitkin      $56.12
    */


    //ADD CODE HERE TO CREATE THE CATS
    let theCatOwner = theCattery.findCatOwner('7')
    //console.log(theCatOwner)
    theCatOwner.addCat('Art', 'Abyssianian', 'N', 'The Underwear Thief')
    
    theCatOwner = theCattery.findCatOwner('23')
    theCatOwner.addCat('Fluffy', 'Persian', 'M', 'Grey ghost')
    
    theCatOwner = theCattery.findCatOwner('23')
    theCatOwner.addCat('Blackey', 'Common Domestic', 'N', 'Her Majesty')
    
    theCatOwner = theCattery.findCatOwner('23')
    theCatOwner.addCat('Inky', 'Persian', 'F', 'The Talker')
    
    theCatOwner = theCattery.findCatOwner('4')
    theCatOwner.addCat('Meta', 'Tabby', 'F', "Mouse's worse nightmare")
    
    theCatOwner = theCattery.findCatOwner('165')
    theCatOwner.addCat('Random', 'Siamese', 'F', 'The One-Eyed Horror')
  
    /*
    Owner ID    Name      Breed          Gender    Secret Name

     7          Art      Abyssianian       N      The Underwear Thief
     23        Fluffy     Persian          M       Grey ghost
     23        Blackey   Common Domestic   N       Her Majesty
     23         Inky       Persian         F       The Talker
     4          Meta        Tabby          F    Mouse's worse nightmare
     165      Random       Siamese         F     The One-Eyed Horror
  */
    return theCattery
  }
}