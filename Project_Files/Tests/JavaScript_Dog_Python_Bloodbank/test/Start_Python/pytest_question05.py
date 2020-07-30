import pytest
import controller
from datetime import date


class TestControllerAddDonationsToDonor:

    def test_a_donor_donor_have_correct_donations_number(self):
        blood_bank = controller.setup()

        donor4023500 = blood_bank.find_donor(4023500)
        assert len(donor4023500.all_my_donations) == 1

        donor5000990 = blood_bank.find_donor(5000990)
        assert len(donor5000990.all_my_donations) == 1

        donor6896701 = blood_bank.find_donor(6896701)
        assert len(donor6896701.all_my_donations) == 1

        donor7906553 = blood_bank.find_donor(7906553)
        assert len(donor7906553.all_my_donations) == 1

        donor9800100 = blood_bank.find_donor(9800100)
        assert len(donor9800100.all_my_donations) == 2


class TestControllerAddDonationsToDonor2:

    def test_b_set_correct_format_of_donations_details(self):
        blood_bank = controller.setup()

        donor4023500 = blood_bank.find_donor(4023500)
        donations = donor4023500.all_my_donations[0]
        assert donations.branch_name == 'Christchurch'
        assert donations.town == 'Addington'
        assert donations.when == date(2018, 11, 1)
        assert donations.blood_group == 'AB+'

        donor5000990 = blood_bank.find_donor(5000990)
        donations = donor5000990.all_my_donations[0]
        assert donations.branch_name == 'Wellington'
        assert donations.town == 'Newtown'
        assert donations.when == date(2017, 7, 11)
        assert donations.blood_group == 'O-'

        donor6896701 = blood_bank.find_donor(6896701)
        donations = donor6896701.all_my_donations[0]
        assert donations.branch_name == 'Auckland'
        assert donations.town == 'Manuka'
        assert donations.when == date(2019, 6, 15)
        assert donations.blood_group == 'O+'

        donor7906553 = blood_bank.find_donor(7906553)
        donations = donor7906553.all_my_donations[0]
        assert donations.branch_name == 'North Shore'
        assert donations.town == 'Takapuna'
        assert donations.when == date(2016, 11, 9)
        assert donations.blood_group == 'B-'

        donor9800100 = blood_bank.find_donor(9800100)
        donations = donor9800100.all_my_donations[0]
        assert donations.branch_name == 'Nelson'
        assert donations.town == 'Tahunanui'
        assert donations.when == date(2017, 10, 9)
        assert donations.blood_group == 'AB+'

        donor9800100 = blood_bank.find_donor(9800100)
        donations = donor9800100.all_my_donations[1]
        assert donations.branch_name == 'Otago'
        assert donations.town == 'Dunedin'
        assert donations.when == date(2018, 9, 5)
        assert donations.blood_group == 'AB+'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'pytest_question05.py'])
