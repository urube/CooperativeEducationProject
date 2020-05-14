import pytest
from member import Member
import controller
import re


class TestMemberStr:

    @pytest.fixture(scope='session')
    def set_data(self):
        member = Member('id', 'first_name', 'last_name', 'birth_date')
        return member

    def test_a_display_member__str__exists(self, set_data):
        member = set_data
        assert type(member).__str__ is not object.__str__

    def test_b_display_member__str__returns_string(self, set_data):
        member = set_data
        returned = str(member)
        assert isinstance(returned, str)

    def test_c_display_member__str__works(self, set_data):
        member = set_data
        returned = str(member)
        assert returned == 'last_name, first_name [id]'


class TestClubDisplayMembers:
    def test_d_club_display_members_correct_format(self):
        club = controller.setup()
        returned = club.display_members()
        assert returned == 'Main, Carla [M01]\nShelly, Mary [M02]\nBean, James [M03]\nDean, Melvin [M04]\nBeam, ' \
                           'Jim [M05]\n'

    def test_e_club_display_last_name(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'^Main.*\nShelly.*\nBean.*\nDean.*\nBeam.*\n'
        assert re.search(expected, returned)

    def test_f_club_display_puntuation_after_last_name(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'.*Main.*\n.*Shelly.*\n.*Bean.*\n.*Dean.*\n.*Beam.*'
        assert re.search(expected, returned)

    def test_g_club_display_space_after_puntuation(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'[.\s]'
        assert re.search(expected, returned)

    def test_h_club_display_first_name(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'.*Carla.*\n.*Mary.*\n.*James.*\n.*Melvin.*\n.*Jim.*'
        assert re.search(expected, returned)

    def test_i_club_display_space_after_first_name(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'[.\s]'
        assert re.search(expected, returned)

    def test_j_club_display_ids(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'[M00]'
        assert re.search(expected, returned)

    def test_k_club_end_line(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'\n'
        assert re.search(expected, returned)


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question03.py'])
