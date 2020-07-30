import pytest
from kennel import Kennel
from owner import Owner
import controller


class TestOwnerStr:

    @pytest.fixture(scope='session')
    def set_data(self):
        kennel = Kennel()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', kennel)
        return owner

    def test_a_owner__str__exists(self, set_data):
        owner = set_data
        assert type(owner).__str__ is not object.__str__

    def test_b_owner__str__returns_string(self, set_data):
        owner = set_data
        returned = str(owner)
        assert isinstance(returned, str)

    def test_c_owner__str__works(self, set_data):
        owner = set_data
        returned = str(owner)
        assert returned == 'first_name, last_name [id]'


class TestKennelGetOwners:
    def test_d_kennel_get_owners(self):
        kennel = controller.setup()
        returned = kennel.get_owners()
        assert returned == 'Andrew, Carter [ACR]\nBrad, McCaw [BMC]\nDan, Ellis [DEL]\nRichie, Thorn [RTH]\n'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question03.py'])

