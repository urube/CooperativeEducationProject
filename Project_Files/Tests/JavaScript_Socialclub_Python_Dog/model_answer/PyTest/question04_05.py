import pytest
from kennel import Kennel
from dog import Dog
from owner import Owner
import controller


class TestDogProperties:

    @pytest.fixture(scope='session')
    def set_data(self):
        dog = Dog('my_owner', 'name', 'favorite_food', 'breed', 'gender')
        return dog

    def test_a_dog_name(self, set_data):
        dog = set_data
        assert hasattr(dog, 'name')
        assert dog.name == 'name'

    def test_b_dog_breed(self, set_data):
        dog = set_data
        assert hasattr(dog, 'breed')
        assert dog.breed == 'breed'

    def test_c_dog_gender(self, set_data):
        dog = set_data
        assert hasattr(dog, 'gender')
        assert dog.gender == 'gender'

    def test_d_dog_secret_name(self, set_data):
        dog = set_data
        assert hasattr(dog, 'favorite_food')
        assert dog.favorite_food == 'favorite_food'

    def test_e_dog_my_owner(self, set_data):
        dog = set_data
        assert hasattr(dog, 'my_owner')
        assert dog.my_owner == 'my_owner'


class TestAddDog:

    @pytest.fixture(scope='session')
    def set_data(self):
        kennel = Kennel()
        owner = Owner('id', 'first_name', 'last_name', 'birth_date', kennel)
        return owner

    def test_f_owner_add_dog_exists(self, set_data):
        owner = set_data
        assert hasattr(owner, 'add_dog')
        assert callable(getattr(owner, 'add_dog', None))

    def test_g_add_dog_increases_dog_count(self, set_data):
        owner = set_data
        owner.add_dog('name1', 'breed1', 'gender1', 'favorite_food1')
        assert len(owner.all_my_dogs) == 1
        owner.add_dog('name2', 'breed2', 'gender2', 'favorite_food2')
        assert len(owner.all_my_dogs) == 2


class TestControllerAddDogsToOwners:
    def test_h_owners_have_correct_dog_numbers(self):
        kennel = controller.setup()

        ownerBMC = kennel.find_owner('BMC')
        assert len(ownerBMC.all_my_dogs) == 1

        ownerRTH = kennel.find_owner('RTH')
        assert len(ownerRTH.all_my_dogs) == 2

        ownerDEL = kennel.find_owner('DEL')
        assert len(ownerDEL.all_my_dogs) == 2

        ownerARC = kennel.find_owner('ACR')
        assert len(ownerARC.all_my_dogs) == 1

    def test_i_dog_details(self):
        kennel = controller.setup()

        ownerBMC = kennel.find_owner('BMC')
        aDog = ownerBMC.all_my_dogs[0]
        assert aDog.my_owner, ownerBMC
        assert aDog.name == 'Speedy'
        assert aDog.favorite_food == 'Ekanuba'
        assert aDog.breed == 'Pomeranian'
        assert aDog.gender == 'N'

        ownerRTH = kennel.find_owner('RTH')
        aDog = ownerRTH.all_my_dogs[0]
        assert aDog.my_owner, ownerRTH
        assert aDog.name == 'Victor'
        assert aDog.favorite_food == 'Chef'
        assert aDog.breed == 'Beagle'
        assert aDog.gender == 'M'
        aDog = ownerRTH.all_my_dogs[1]
        assert aDog.my_owner, ownerRTH
        assert aDog.name == 'Killer'
        assert aDog.favorite_food == 'Purina'
        assert aDog.breed == 'Mastiff'
        assert aDog.gender == 'N'

        ownerDEL = kennel.find_owner('DEL')
        aDog = ownerDEL.all_my_dogs[0]
        assert aDog.my_owner, ownerDEL
        assert aDog.name == 'Ruftero'
        assert aDog.favorite_food == 'Ekanuba'
        assert aDog.breed == 'Poodle'
        assert aDog.gender == 'F'
        aDog = ownerDEL.all_my_dogs[1]
        assert aDog.my_owner, ownerDEL
        assert aDog.name == 'Sausage'
        assert aDog.favorite_food == 'Purina'
        assert aDog.breed == 'Dachshund'
        assert aDog.gender == 'F'

        ownerARC = kennel.find_owner('ACR')
        aDog = ownerARC.all_my_dogs[0]
        assert aDog.my_owner, ownerARC
        assert aDog.name == 'Random'
        assert aDog.favorite_food == 'Cat'
        assert aDog.breed == 'Mastiff'
        assert aDog.gender == 'F'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question04_05.py'])
