import pytest
import controller


class TestAddingFiveDonors:

    def test_a_have_five_donors(self):
        blood_bank = controller.setup()
        assert len(blood_bank.all_my_donors) == 5

    def test_b_correct_donor_details(self):
        blood_bank = controller.setup()

        donor = blood_bank.all_my_donors[0]
        assert donor.id == 9800100
        assert donor.first_name == 'Jonathan'
        assert donor.last_name == 'Watts'
        assert donor.gender == 'M'

        donor = blood_bank.all_my_donors[1]
        assert donor.id == 4023500
        assert donor.first_name == 'Sandy'
        assert donor.last_name == 'Moore'
        assert donor.gender == 'F'

        donor = blood_bank.all_my_donors[2]
        assert donor.id == 7906553
        assert donor.first_name == 'John'
        assert donor.last_name == 'Burk'
        assert donor.gender == 'M'

        donor = blood_bank.all_my_donors[3]
        assert donor.id == 5000990
        assert donor.first_name == 'Daniel'
        assert donor.last_name == 'McDonald'
        assert donor.gender == 'M'

        donor = blood_bank.all_my_donors[4]
        assert donor.id == 6896701
        assert donor.first_name == 'Cathy'
        assert donor.last_name == 'Watson'
        assert donor.gender == 'F'
