import pytest
from donor import Donor
from donation import Donation
from datetime import date


class TestDonationProperties:

    @pytest.fixture(scope='session')
    def set_data(self):
        donation = Donation('branch', 'christchurch', date(2018, 1, 1), 'A+')
        return donation

    def test_a_donation_branch_name(self, set_data):
        donation = set_data
        assert hasattr(donation, 'branch_name')
        assert donation.branch_name == 'branch'

    def test_b_donation_town(self, set_data):
        donation = set_data
        assert hasattr(donation, 'town')
        assert donation.town == 'christchurch'

    def test_c_donation_date(self, set_data):
        donation = set_data
        assert hasattr(donation, 'when')
        assert donation.when == date(2018, 1, 1)

    def test_d_donation_blood_group(self, set_data):
        donation = set_data
        assert hasattr(donation, 'blood_group')
        assert donation.blood_group == 'A+'


class TestAddDonation:

    @pytest.fixture(scope='session')
    def set_data(self):
        donor = Donor('id', 'f_name', 'L_name', 'M')
        donor.add_donation('01', 'Mike', 'Lance', 'M')
        return donor

    def test_e_donor_add_donation_exist(self, set_data):
        donor = set_data
        assert hasattr(donor, 'add_donation')
        assert callable(getattr(donor, 'add_donation', None))

    def test_f_donor_add_activity_works(self, set_data):
        donor = set_data
        assert len(donor.all_my_donations) == 1


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'pytest_question04.py'])
