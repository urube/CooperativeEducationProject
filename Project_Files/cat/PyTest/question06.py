import pytest
from cattery import Cattery
from owner import Owner


class TestOwnerHasManyCats:
    def test_a_owner_has_many_cats_exists(self):
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owing', cattery)
        assert hasattr(owner, 'has_many_cats')
        assert callable(getattr(owner, 'has_many_cats', None))

    def test_b_has_many_cats_returns_false_with_0_cats(self):
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owing', cattery)
        returned = owner.has_many_cats()
        assert returned == False

    def test_c_has_many_cats_returns_false_with_1_cat(self):
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owing', cattery)
        owner.add_cat('name1', 'breed1', 'gender1', 'secret_name1')
        returned = owner.has_many_cats()
        assert returned == False

    def test_d_has_many_cats_returns_false_with_2_cats(self):
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owing', cattery)
        owner.add_cat('name1', 'breed1', 'gender1', 'secret_name1')
        owner.add_cat('name2', 'breed2', 'gender2', 'secret_name2')
        returned = owner.has_many_cats()
        assert returned == False

    def test_e_has_many_cats_returns_true_with_3_cats(self):
        cattery = Cattery()
        owner = Owner('id', 'first_name', 'last_name', 'amount_owing', cattery)
        owner.add_cat('name1', 'breed1', 'gender1', 'secret_name1')
        owner.add_cat('name2', 'breed2', 'gender2', 'secret_name2')
        owner.add_cat('name3', 'breed3', 'gender3', 'secret_name3')
        returned = owner.has_many_cats()
        assert returned == True


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question06.py'])
