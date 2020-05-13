import pytest
from club import Club
from member import Member


class TestStaringClubCode:

    def test_a_club_collection(self):
        club = Club()
        assert hasattr(club, 'all_my_members')
        assert type(club.all_my_members) == list

    def test_b_club_add_member(self):
        club = Club()
        assert hasattr(club, 'add_member')
        assert callable(getattr(club, 'add_member', None))

    def test_c_club_find_member(self):
        club = Club()
        assert hasattr(club, 'find_member')
        assert callable(getattr(club, 'find_member', None))

    def test_d_club_sort_members(self):
        club = Club()
        assert hasattr(club, 'sort_members')
        assert callable(getattr(club, 'sort_members', None))


class TestStaringMemberCode:

    def test_e_member_properties(self):
        member = Member('1', 'A', 'B', 2)
        assert hasattr(member, 'id')
        assert hasattr(member, 'first_name')
        assert hasattr(member, 'last_name')
        assert hasattr(member, 'birth_date')
        assert hasattr(member, 'all_my_activities')
        assert type(member.all_my_activities) == list

    def test_f_member_methods(self):
        member = Member('1', 'A', 'B', 2)
        assert hasattr(member, 'sort_activities')
        assert callable(getattr(member, 'sort_activities', None))


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question00.py'])
