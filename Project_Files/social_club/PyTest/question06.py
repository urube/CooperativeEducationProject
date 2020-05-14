import pytest
from member import Member


class TestMemberHasManyActivities:

    @pytest.fixture(scope='session')
    def set_data(self):
        member = Member('id', 'first_name', 'last_name', 'birth_date')
        return member

    def test_a_member_has_many_activities_exists(self, set_data):
        member = set_data
        assert hasattr(member, 'has_many_activities')
        assert callable(getattr(member, 'has_many_activities', None))

    def test_b_has_many_activities_returns_false_with_zero_activity(self, set_data):
        member = set_data
        returned = member.has_many_activities()
        assert returned == False

    def test_c_has_many_activities_returns_false_with_one_activity(self, set_data):
        member = set_data
        member.add_activity('activity1', 'location1', 'start_date1', 'cost1')
        returned = member.has_many_activities()
        assert returned == False

    def test_d_has_many_activities_returns_true_with_more_than_one_activity(self, set_data):
        member = set_data
        member.add_activity('activity1', 'location1', 'start_date1', 'cost1')
        member.add_activity('activity2', 'location2', 'start_date2', 'cost2')
        returned = member.has_many_activities()
        assert returned == True

    def test_e_has_many_activities_returns_true_with_more_than_two_activity(self, set_data):
        member = set_data
        member.add_activity('activity1', 'location1', 'start_date1', 'cost1')
        member.add_activity('activity2', 'location2', 'start_date2', 'cost2')
        member.add_activity('activity3', 'location3', 'start_date3', 'cost3')
        returned = member.has_many_activities()
        assert returned == True


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question06.py'])

