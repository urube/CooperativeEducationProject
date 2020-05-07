from bloodbank import BloodBank
from datetime import date


def setup():
    the_blood_bank = BloodBank()
    the_blood_bank.add_donor(9800100, 'Jonathan', 'Watts', 'M')
    the_blood_bank.add_donor(4023500, 'Sandy', 'Moore', 'F')
    the_blood_bank.add_donor(7906553, 'John', 'Burk', 'M')
    the_blood_bank.add_donor(5000990, 'Daniel', 'McDonald', 'M')
    the_blood_bank.add_donor(6896701, 'Cathy', 'Watson', 'F')

    a_donor = the_blood_bank.find_donor(4023500)
    a_donor.add_donation('Christchurch', 'Addington', date(2018, 11, 1), 'AB+')

    a_donor = the_blood_bank.find_donor(5000990)
    a_donor.add_donation('Wellington', 'Newtown', date(2017, 7, 11), 'O-')

    a_donor = the_blood_bank.find_donor(6896701)
    a_donor.add_donation('Auckland', 'Manuka', date(2019, 6, 15), 'O+')

    a_donor = the_blood_bank.find_donor(7906553)
    a_donor.add_donation('North Shore', 'Tahunanui', date(2016, 11, 9), 'B-')

    a_donor = the_blood_bank.find_donor(9800100)
    a_donor.add_donation('Nelson', 'Tahunanui', date(2017, 10, 9), 'AB+')
    a_donor.add_donation('Otago', 'Dunedin', date(2018, 9, 5), 'AB+')

    return the_blood_bank


if __name__ == '__main__':
    a_bank = setup()
