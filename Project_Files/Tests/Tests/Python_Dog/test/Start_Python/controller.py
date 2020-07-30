from kennel import Kennel
from datetime import date


def setup():
    the_kennel = Kennel()
    """
    BMC   Brad    McCaw   12/13/1982
    RTH   Richie  Thorn   8/05/1980
    DEL   Dan     Ellis   16/02/1984
    ACR   Andrew  Carter  30/11/1987
    """
    # ADD CODE HERE TO CREATE THE OWNERS
    the_kennel.add_owner('BMC', 'Brad', 'McCaw', date(1982, 11, 12))
    the_kennel.add_owner('RTH', 'Richie', 'Thorn', date(1980, 4, 8))
    the_kennel.add_owner('DEL', 'Dan', 'Ellis', date(1984, 1, 16))
    the_kennel.add_owner('ACR', 'Andrew', 'Carter', date(1987, 10, 30))

    """    
    DogOwner ID     Name         Breed         Gender      Favorite Food
      BMC          Speedy     Pomeranian        N           Ekanuba
      RTH          Victor      Beagle           M           Chef
      RTH          Killer      Mastiff          N           Purina
      DEL          Ruftero     Poodle           F           Ekanuba
      DEL          Sausage    Dachshund         F           Purina
      ACR          Random      Mastiff          F            Cat
    """
    # ADD CODE HERE TO CREATE THE DOGS

    return the_kennel


if __name__ == '__main__':
    a_kennel = setup()
    print(a_kennel.get_owners())
    print(a_kennel.get_those_with_one_dog())
