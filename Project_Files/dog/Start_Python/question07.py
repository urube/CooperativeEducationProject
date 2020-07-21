import pytest
from kennel import Kennel
from dog import Dog
import controller


class TestDogStr:
    def test_a_dog__str__exists(self):
        dog = Dog('my_owner', 'name', 'favorite_food', 'breed', 'gender')
        assert type(dog).__str__ is not object.__str__

    def test_b_dog__str__works(self):
        dog = Dog('my_owner', 'name', 'favorite_food', 'breed', 'gender')
        returned = str(dog)
        assert returned == 'name (gender) the breed who likes to eat favorite_food'


class TestKennelGetThoseWithManyDogs:
    def test_c_kennel_get_those_with_many_dogs_exists(self):
        kennel = Kennel()
        assert hasattr(kennel, 'get_those_with_one_dog')
        assert callable(getattr(kennel, 'get_those_with_one_dog', None))

    def test_d_kennel_get_those_with_many_dogs_returns_string(self):
        kennel = Kennel()
        returned = kennel.get_those_with_one_dog()
        assert isinstance(returned, str)

    def test_e_kennel_get_those_with_one_dog_not_hard_coded(self):
        kennel = Kennel()
        returned = kennel.get_those_with_one_dog()
        assert len(returned) == 0

    # noinspection SpellCheckingInspection
    def test_f_kennel_get_those_with_one_dog_works(self):
        kennel = controller.setup()
        returned = kennel.get_those_with_one_dog()
        assert returned == 'Andrew, Carter [ACR]\n  Random (F) the Mastiff who likes to eat Cat\nBrad, ' \
                           'McCaw [BMC]\n  ' \
                           'Speedy (N) the Pomeranian who likes to eat Ekanuba\n'


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'question07.py'])
