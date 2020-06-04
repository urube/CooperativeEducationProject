from cattery import Cattery


def setup():
    the_cattery = Cattery()
    """
      ID    First Name   Last Name   Amount Owed
      7        Ruth      George      $12.34
      23      Casey      van Dyke    $34.56
      4      Temepara   Williams    $12.56
      165     Irene     Aitkin      $56.12
    """
    # ADD CODE HERE TO CREATE THE OWNERS
    the_cattery.add_owner('7', 'Ruth', 'George', 12.34)
    the_cattery.add_owner('23', 'Casey', 'van Dyke', 34.56)
    the_cattery.add_owner('4', 'Temepara', 'Williams', 12.56)
    the_cattery.add_owner('165', 'Irene', 'Aitkin', 56.12)

    """
    Owner ID    Name      Breed          Gender    Secret Name
    
     7          Art      Abyssianian       N      The Underwear Thief
     23        Fluffy     Persian          M       Grey ghost
     23        Blackey   Common Domestic   N       Her Majesty
     23         Inky       Persian         F       The Talker
     4          Meta        Tabby          F    Mouse's worse nightmare
     165      Random       Siamese         F     The One-Eyed Horror
    """
    # ADD CODE HERE TO CREATE THE CATS

    owner = the_cattery.find_owner('7')
    owner.add_cat('Art', 'Abyssianian', 'N', 'The Underwear Thief')

    owner = the_cattery.find_owner('23')
    owner.add_cat('Fluffy', 'Persian', 'M', 'Grey ghost')
    owner.add_cat('Blackey', 'Common Domestic', 'N', 'Her Majesty')
    owner.add_cat('Inky', 'Persian', 'F', 'The Talker')

    owner = the_cattery.find_owner('4')
    owner.add_cat('Meta', 'Tabby', 'F', "Mouse's worse nightmare")

    cat_owner = the_cattery.find_owner('165')
    cat_owner.add_cat('Random', 'Siamese', 'F', 'The One-Eyed Horror')

    return the_cattery


if __name__ == '__main__':
    cattery = setup()
    print(cattery.get_owners())
    print(cattery.get_those_with_many_cats())
