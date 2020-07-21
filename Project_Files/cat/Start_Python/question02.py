import pytest
from cattery import Cattery
from owner import Owner
import controller


class TestAddingFourOwners:
    def test_a_has_4_Owners(self):
        cattery = controller.setup()
        assert len(cattery.all_my_owners) == 4

    def test_b_owner_details(self):
        cattery = controller.setup()
        owner = cattery.all_my_owners[0]
        assert owner.id == '7'
        assert owner.first_name == 'Ruth'
        assert owner.last_name == 'George'
        assert owner.amount_owed == 12.34

        owner = cattery.all_my_owners[1]
        assert owner.id == '23'
        assert owner.first_name == 'Casey'
        assert owner.last_name == 'van Dyke'
        assert owner.amount_owed == 34.56

        owner = cattery.all_my_owners[2]
        assert owner.id == '4'
        assert owner.first_name == 'Temepara'
        assert owner.last_name == 'Williams'
        assert owner.amount_owed == 12.56

        owner = cattery.all_my_owners[3]
        assert owner.id == '165'
        assert owner.first_name == 'Irene'
        assert owner.last_name == 'Aitkin'
        assert owner.amount_owed == 56.12


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question02.py'])
