import pytest
from cattery import Cattery
from owner import Owner


class TestStaringCatteryCode:

    def test_a_cattery_collection(self):
        cattery = Cattery()
        assert hasattr(cattery, 'all_my_owners')
        assert type(cattery.all_my_owners) == list

    def test_b_cattery_add_owner(self):
        cattery = Cattery()
        assert hasattr(cattery, 'add_owner')
        assert callable(getattr(cattery, 'add_owner', None))

    def test_c_cattery_find_owner(self):
        cattery = Cattery()
        assert hasattr(cattery, 'find_owner')
        assert callable(getattr(cattery, 'find_owner', None))

    def test_d_cattery_sort_owners(self):
        cattery = Cattery()
        assert hasattr(cattery, 'sort_owners')
        assert callable(getattr(cattery, 'sort_owners', None))


class TestStaringOwnerCode:
    def test_a_owner_properties(self):
        cattery = Cattery()
        owner = Owner('1', 'A', 'B', 2, cattery)
        assert hasattr(owner, 'id')
        assert hasattr(owner, 'first_name')
        assert hasattr(owner, 'last_name')
        assert hasattr(owner, 'amount_owed')
        assert hasattr(owner, 'my_cattery')
        assert hasattr(owner, 'all_my_cats')
        assert type(owner.all_my_cats) == list

    def test_b_owner_methods(self):
        cattery = Cattery()
        owner = Owner('1', 'A', 'B', 2, cattery)
        assert hasattr(owner, 'sort_cats')
        assert callable(getattr(owner, 'sort_cats', None))


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
