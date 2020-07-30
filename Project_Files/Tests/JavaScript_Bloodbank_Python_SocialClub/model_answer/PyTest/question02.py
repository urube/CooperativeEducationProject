import pytest
import controller
from datetime import date


class TestAddingFiveMembers:
    def test_a_has_5_Members(self):
        club = controller.setup()
        assert len(club.all_my_members) == 5

    def test_b_member_details(self):
        club = controller.setup()
        member = club.all_my_members[0]
        assert member.id == 'M02'
        assert member.first_name == 'Mary'
        assert member.last_name == 'Shelly'
        assert member.birth_date == date(1981, 1, 17)

        member = club.all_my_members[1]
        assert member.id == 'M04'
        assert member.first_name == 'Melvin'
        assert member.last_name == 'Dean'
        assert member.birth_date == date(2000, 8, 8)

        member = club.all_my_members[2]
        assert member.id == 'M05'
        assert member.first_name == 'Jim'
        assert member.last_name == 'Beam'
        assert member.birth_date == date(1980, 12, 27)

        member = club.all_my_members[3]
        assert member.id == 'M01'
        assert member.first_name == 'Carla'
        assert member.last_name == 'Main'
        assert member.birth_date == date(1980, 7, 11)

        member = club.all_my_members[4]
        assert member.id == 'M03'
        assert member.first_name == 'James'
        assert member.last_name == 'Bean'
        assert member.birth_date == date(2001, 8, 15)


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question02.py'])
