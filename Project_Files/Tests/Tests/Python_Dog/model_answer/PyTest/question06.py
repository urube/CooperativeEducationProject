import pytest
from kennel import Kennel
from owner import Owner


class TestOwnerHasOneDog:

    @pytest.fixture(scope='session')
    def set_data(self):
        kennel = Kennel()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', kennel)
        return owner

    def test_a_owner_has_one_dog_exists(self, set_data):
        owner = set_data
        assert hasattr(owner, 'has_one_dog')
        assert callable(getattr(owner, 'has_one_dog', None))

    def test_b_has_one_dog_returns_false_with_0_dogs(self, set_data):
        owner = set_data
        returned = owner.has_one_dog()
        assert returned == False

    def test_c_has_one_dog_returns_true_with_1_dog(self, set_data):
        owner = set_data
        owner.add_dog('name1', 'breed1', 'gender1', 'favorite_food1')
        returned = owner.has_one_dog()
        assert returned == True

    def test_d_has_one_dog_returns_false_with_2_dogs(self, set_data):
        owner = set_data
        owner.add_dog('name1', 'breed1', 'gender1', 'favorite_food1')
        owner.add_dog('name2', 'breed2', 'gender2', 'favorite_food2')
        returned = owner.has_one_dog()
        assert returned == False


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question06.py'])
