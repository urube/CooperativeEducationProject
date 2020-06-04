import pytest
from cattery import Cattery
from cat import Cat
from owner import Owner
import controller


class TestCatProperties:
    def test_a_cat_name(self):
        cat = Cat('my_owner', 'name', 'breed', 'gender', 'secret_name')
        assert hasattr(cat, 'name')
        assert cat.name == 'name'

    def test_b_cat_breed(self):
        cat = Cat('my_owner', 'name', 'breed', 'gender', 'secret_name')
        assert hasattr(cat, 'breed')
        assert cat.breed == 'breed'

    def test_c_cat_gender(self):
        cat = Cat('my_owner', 'name', 'breed', 'gender', 'secret_name')
        assert hasattr(cat, 'gender')
        assert cat.gender == 'gender'

    def test_d_cat_secret_name(self):
        cat = Cat('my_owner', 'name', 'breed', 'gender', 'secret_name')
        assert hasattr(cat, 'secret_name')
        assert cat.secret_name == 'secret_name'

    def test_e_cat_my_owner(self):
        cat = Cat('my_owner', 'name', 'breed', 'gender', 'secret_name')
        assert hasattr(cat, 'my_owner')
        assert cat.my_owner == 'my_owner'


class TestAddCat:
    def test_f_owner_add_cat_exists(self):
        cattery = Cattery()
        owner = Owner('1', 'A', 'B', 2, cattery)
        assert hasattr(owner, 'add_cat')
        assert callable(getattr(owner, 'add_cat', None))

    def test_g_add_cat_increases_cat_count(self):
        cattery = Cattery()
        owner = Owner('1', 'A', 'B', 2, cattery)
        owner.add_cat('name1', 'breed1', 'gender1', 'secret_name1')
        assert len(owner.all_my_cats) == 1
        owner.add_cat('name2', 'breed2', 'gender2', 'secret_name2')
        assert len(owner.all_my_cats) == 2


class TestControllerAddCatsToOwners:
    def test_h_owners_have_correct_cat_numbers(self):
        cattery = controller.setup()

        owner4 = cattery.find_owner('4')
        assert len(owner4.all_my_cats) == 1

        owner7 = cattery.find_owner('7')
        assert len(owner7.all_my_cats) == 1

        owner23 = cattery.find_owner('23')
        assert len(owner23.all_my_cats) == 3

        owner165 = cattery.find_owner('165')
        assert len(owner165.all_my_cats) == 1

    def test_i_cat_details(self):
        cattery = controller.setup()

        owner4 = cattery.find_owner('4')
        aCat = owner4.all_my_cats[0]
        assert aCat.my_owner, owner4
        assert aCat.name == 'Meta'
        assert aCat.secret_name == 'Mouse\'s worse nightmare'
        assert aCat.breed == 'Tabby'
        assert aCat.gender == 'F'

        owner7 = cattery.find_owner('7')
        aCat = owner7.all_my_cats[0]
        assert aCat.my_owner, owner7
        assert aCat.name == 'Art'
        assert aCat.secret_name == 'The Underwear Thief'
        assert aCat.breed == 'Abyssianian'
        assert aCat.gender == 'N'

        owner23 = cattery.find_owner('23')

        aCat = owner23.all_my_cats[0]
        assert aCat.my_owner, owner23
        assert aCat.name == 'Fluffy'
        assert aCat.secret_name == 'Grey ghost'
        assert aCat.breed == 'Persian'
        assert aCat.gender == 'M'

        aCat = owner23.all_my_cats[1]
        assert aCat.my_owner, owner23
        assert aCat.name == 'Blackey'
        assert aCat.secret_name == 'Her Majesty'
        assert aCat.breed == 'Common Domestic'
        assert aCat.gender == 'N'

        aCat = owner23.all_my_cats[2]
        assert aCat.my_owner, owner23
        assert aCat.name == 'Inky'
        assert aCat.secret_name == 'The Talker'
        assert aCat.breed == 'Persian'
        assert aCat.gender == 'F'

        owner165 = cattery.find_owner('165')
        aCat = owner165.all_my_cats[0]
        assert aCat.my_owner, owner165
        assert aCat.name == 'Random'
        assert aCat.secret_name == 'The One-Eyed Horror'
        assert aCat.breed == 'Siamese'
        assert aCat.gender == 'F'


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question04_05.py'])
