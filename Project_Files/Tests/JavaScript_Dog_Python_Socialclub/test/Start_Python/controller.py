from club import Club
from datetime import date


def setup():
    the_club = Club()
    the_club.add_member('M02', 'Mary', 'Shelly', date(1981, 1, 17))
    the_club.add_member('M04', 'Melvin', 'Dean', date(2000, 8, 8))
    the_club.add_member('M05', 'Jim', 'Beam', date(1980, 12, 27))
    the_club.add_member('M01', 'Carla', 'Main', date(1980, 7, 11))
    the_club.add_member('M03', 'James', 'Bean', date(2001, 8, 15))

    # member_id event                  place       start_date  cost
    # M01       Autumn Festival        Arrowtown   01/01/2018  $0.00
    # M05       Joyride Carnival       Auckland    05/02/2019  $300.00
    # M05       Easter High Tea        Wellington  10/12/2018  $150.00
    # M05       Festival of Colour     Hamilton    07/11/2018  $0.00
    # M02       Wine and Food Festival Napier      10/20/2020  $350.00
    # M04       Music in Park          Hamilton    08/12/2018  $0.00
    # ADD CODE HERE

    return the_club


if __name__ == '__main__':
    a_club = setup()
    #  print(a_club.display_members())
    #  print(a_club.display_busy_members())
