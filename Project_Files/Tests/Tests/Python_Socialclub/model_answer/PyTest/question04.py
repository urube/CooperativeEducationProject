import pytest
from activity import Activity
from member import Member
from datetime import date


class TestActivityProperties:

    @pytest.fixture(scope='session')
    def set_data(self):
        activity = Activity('name', 'place', 'start_date', 'cost')
        return activity

    def test_a_activity_name(self, set_data):
        activity = set_data
        assert hasattr(activity, 'name')
        assert activity.name == 'name'

    def test_b_activity_place(self, set_data):
        activity = set_data
        assert hasattr(activity, 'place')
        assert activity.place == 'place'

    def test_c_activity_start_date(self, set_data):
        activity = set_data
        assert hasattr(activity, 'start_date')
        assert activity.start_date == 'start_date'

    def test_d_activity_cost(self, set_data):
        activity = set_data
        assert hasattr(activity, 'cost')
        assert activity.cost == 'cost'


class TestAddActivity:

    @pytest.fixture(scope='session')
    def set_data(self):
        member = Member('M01', 'A', 'B', 2)
        return member

    def test_e_member_add_activity_exists(self, set_data):
        member = set_data
        assert hasattr(member, 'add_activity')
        assert callable(getattr(member, 'add_activity', None))

    def test_f_add_activity_increases_activity_count(self, set_data):
        member = set_data
        member.add_activity('name1', 'place1', 'start_date', 'cost1')
        assert len(member.all_my_activities) == 1
        member.add_activity('name2', 'place2', 'start_date', 'cost2')
        assert len(member.all_my_activities) == 2


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question04.py'])

