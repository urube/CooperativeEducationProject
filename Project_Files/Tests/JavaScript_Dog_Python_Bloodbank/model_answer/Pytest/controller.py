from bloodbank import BloodBank
from datetime import date


def setup():
    the_blood_bank = BloodBank()
    the_blood_bank.add_donor(9800100, 'Jonathan', 'Watts', 'M')
    the_blood_bank.add_donor(4023500, 'Sandy', 'Moore', 'F')
    the_blood_bank.add_donor(7906553, 'John', 'Burk', 'M')
    the_blood_bank.add_donor(5000990, 'Daniel', 'McDonald', 'M')
    the_blood_bank.add_donor(6896701, 'Cathy', 'Watson', 'F')

    # NationalId  First Name  Last Name  Gender
    # 9800100     Jonathan    Watts       M
    # 4023500     Sandy       Moore       F
    # 7906553     John        Burk        M
    # 5000990     Daniel      McDonald    M
    # 6896701     Cathy       Watson      F

    a_donor = the_blood_bank.find_donor(4023500)
    a_donor.add_donation('Christchurch', 'Addington', date(2018, 11, 1), 'AB+')

    a_donor = the_blood_bank.find_donor(5000990)
    a_donor.add_donation('Wellington', 'Newtown', date(2017, 7, 11), 'O-')

    a_donor = the_blood_bank.find_donor(6896701)
    a_donor.add_donation('Auckland', 'Manuka', date(2019, 6, 15), 'O+')

    a_donor = the_blood_bank.find_donor(7906553)
    a_donor.add_donation('North Shore', 'Takapuna', date(2016, 11, 9), 'B-')

    a_donor = the_blood_bank.find_donor(9800100)
    a_donor.add_donation('Nelson', 'Tahunanui', date(2017, 10, 9), 'AB+')
    a_donor.add_donation('Otago', 'Dunedin', date(2018, 9, 5), 'AB+')

    # NationalId   BranchName     Town      DonationDate    BloodGroup
    # 4023500      Christchurch  Addington  01/12/2018      AB+
    # 5000990      Wellington    Newtown    30/08/2017      O-
    # 6896701      Auckland      Manuka     11/07/2019      O+
    # 7906553      North Shore   Takapuna   15/12/2016      B-
    # 9800100      Nelson        Tahunanui  09/11/2017      AB+
    # 9800100      Otago         Dunedin    05/10/2018      AB+

    return the_blood_bank


if __name__ == '__main__':
    a_bank = setup()
