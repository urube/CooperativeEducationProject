import pytest
from bloodbank import BloodBank
from donor import Donor


class TestBloodBank:

    def test_a_all_donors_collection(self):
        blood_bank = BloodBank()
        assert hasattr(blood_bank, 'all_my_donors')
        assert type(blood_bank.all_my_donors) == list

    def test_b_add_donor(self):
        blood_bank = BloodBank()
        assert hasattr(blood_bank, 'add_donor')
        assert callable(getattr(blood_bank, 'add_donor', None))

    def test_c_find_donor(self):
        blood_bank = BloodBank()
        assert hasattr(blood_bank, 'find_donor')
        assert callable(getattr(blood_bank, 'find_donor', None))

    def test_d_sort_donor(self):
        blood_bank = BloodBank()
        assert hasattr(blood_bank, 'sort_donor')
        assert callable(getattr(blood_bank, 'sort_donor', None))


class TestDonor:

    def test_e_donor_properties(self):
        donor = Donor(1234, 'Andaz', 'Rai', 'M')
        assert hasattr(donor, 'id')
        assert hasattr(donor, 'first_name')
        assert hasattr(donor, 'last_name')
        assert hasattr(donor, 'gender')
        assert hasattr(donor, 'all_my_donations')
        assert type(donor.all_my_donations) == list

    def test_f_donations_properties(self):
        donor = Donor(1234, 'Andaz', 'Rai', 'M')
        assert (hasattr(donor, 'sort_activities'))
        assert (callable(getattr(donor, 'sort_activities', None)))


# if __name__ == '__main':
#     pytest.main(['-s', '-v', 'pytest_question00.py'])
