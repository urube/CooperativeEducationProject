import pytest
from kennel import Kennel
from owner import Owner


class TestStaringKennelCode:

    def test_a_kennel_collection(self):
        kennel = Kennel()
        assert hasattr(kennel, 'all_my_owners')
        assert type(kennel.all_my_owners) == list

    def test_b_kennel_add_owner(self):
        kennel = Kennel()
        assert hasattr(kennel, 'add_owner')
        assert callable(getattr(kennel, 'add_owner', None))

    def test_c_kennel_find_owner(self):
        kennel = Kennel()
        assert hasattr(kennel, 'find_owner')
        assert callable(getattr(kennel, 'find_owner', None))

    def test_d_kennel_sort_owners(self):
        kennel = Kennel()
        assert hasattr(kennel, 'sort_owners')
        assert callable(getattr(kennel, 'sort_owners', None))


class TestStaringOwnerCode:
    def test_a_owner_properties(self):
        kennel = Kennel()
        owner = Owner('1', 'A', 'B', 2, kennel)
        assert hasattr(owner, 'id')
        assert hasattr(owner, 'first_name')
        assert hasattr(owner, 'last_name')
        assert hasattr(owner, 'birth_date')
        assert hasattr(owner, 'my_kennel')
        assert hasattr(owner, 'all_my_dogs')
        assert type(owner.all_my_dogs) == list

    def test_b_owner_methods(self):
        kennel = Kennel()
        owner = Owner('1', 'A', 'B', 2, kennel)
        assert hasattr(owner, 'sort_dogs')
        assert callable(getattr(owner, 'sort_dogs', None))


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question00.py'])
