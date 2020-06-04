import pytest
from kennel import Kennel
from owner import Owner
import controller
from datetime import date


class TestAddingFourOwners:
    def test_a_has_4_Owners(self):
        kennel = controller.setup()
        assert len(kennel.all_my_owners) == 4

    def test_b_owner_details(self):
        kennel = controller.setup()

        owner = kennel.all_my_owners[0]
        assert owner.id == 'BMC'
        assert owner.first_name == 'Brad'
        assert owner.last_name == 'McCaw'
        assert owner.birth_date == date(1982, 11, 12)

        owner = kennel.all_my_owners[1]
        assert owner.id == 'RTH'
        assert owner.first_name == 'Richie'
        assert owner.last_name == 'Thorn'
        assert owner.birth_date == date(1980, 4, 8)

        owner = kennel.all_my_owners[2]
        assert owner.id == 'DEL'
        assert owner.first_name == 'Dan'
        assert owner.last_name == 'Ellis'
        assert owner.birth_date == date(1984, 1, 16)

        owner = kennel.all_my_owners[3]
        assert owner.id == 'ACR'
        assert owner.first_name == 'Andrew'
        assert owner.last_name == 'Carter'
        assert owner.birth_date == date(1987, 10, 30)


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question02.py'])

