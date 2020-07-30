import pytest
from donor import Donor
from datetime import date


class TestDonorHasPositiveBloodGroup:

    @pytest.fixture(scope='session')
    def set_data(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        return donor

    def test_a_donor_has_positive_blood_group_exists(self, set_data):
        donor = set_data
        assert hasattr(donor, 'has_positive_blood_group')
        assert callable(getattr(donor, 'has_positive_blood_group'))

    def test_a_donor_has_positive_blood_group_return_false_when_negative_blood(self, set_data):
        donor = set_data
        returned = donor.has_positive_blood_group()
        assert returned == False

    def test_a_donor_has_positive_blood_group_returns_true_when_positive_blood(self, set_data):
        donor = set_data
        donor.add_donation('Christchurch', 'Moore', date(2020, 5, 13), 'A+')
        returned = donor.has_positive_blood_group()
        assert returned == True


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'pytest_question06.py'])
