import pytest
from cattery import Cattery
from cat import Cat
import controller


class TestCatStr:
    def test_a_cat__str__exists(self):
        cat = Cat('my_owner', 'name', 'breed', 'gender', 'secret_name')
        assert type(cat).__str__ is not object.__str__

    def test_b_cat__str__works(self):
        cat = Cat('my_owner', 'name', 'breed', 'gender', 'secret_name')
        returned = str(cat)
        assert returned == 'name (gender) aka secret_name'


class TestCatteryGetThoseWithManyCats:
    def test_c_cattery_get_those_with_many_cats_exists(self):
        cattery = Cattery()
        assert hasattr(cattery, 'get_those_with_many_cats')
        assert callable(getattr(cattery, 'get_those_with_many_cats', None))

    def test_d_cattery_get_those_with_many_cats_returns_string(self):
        cattery = Cattery()
        returned = cattery.get_those_with_many_cats()
        assert isinstance(returned, str)

    def test_e_cattery_get_those_with_many_cats_not_hard_coded(self):
        cattery = Cattery()
        returned = cattery.get_those_with_many_cats()
        assert len(returned) == 0

    # noinspection SpellCheckingInspection
    def test_f_cattery_get_those_with_many_cats_works(self):
        cattery = controller.setup()
        returned = cattery.get_those_with_many_cats()
        assert returned == 'Casey, van Dyke [23]\n\tBlackey (N) aka Her Majesty\n\tFluffy (M) aka Grey ghost\n\tInky ' \
                           '(F) aka The Talker\n '


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
