import unittest
from activity import Activity
from member import Member
from datetime import date


class TestActivityProperties(unittest.TestCase):
    def test_a_activity_name(self):
        activity = Activity('name', 'place', 'start_date', 'cost')
        self.assertTrue(hasattr(activity, 'name'))
        self.assertEqual(activity.name, 'name')

    def test_b_activity_place(self):
        activity = Activity('name', 'place', 'start_date', 'cost')
        self.assertTrue(hasattr(activity, 'place'))
        self.assertEqual(activity.place, 'place')

    def test_c_activity_start_date(self):
        activity = Activity('name', 'place', 'start_date', 'cost')
        self.assertTrue(hasattr(activity, 'start_date'))
        self.assertEqual(activity.start_date, 'start_date')

    def test_d_activity_cost(self):
        activity = Activity('name', 'place', 'start_date', 'cost')
        self.assertTrue(hasattr(activity, 'cost'))
        self.assertEqual(activity.cost, 'cost')

    def test_e_activity_has_constructor_named_properly(self):
        activity = Activity('name', 'place', 'start_date', 'cost')
        self.actual = set(activity.__dict__)
        self.expected = {'name', 'place', 'start_date', 'cost'}
        self.actual.difference(self.expected)
        self.assertEqual(self.expected, self.actual)


class TestAddActivity(unittest.TestCase):
    def test_f_member_add_activity_exists(self):
        member = Member('M01', 'A', 'B', 2)
        self.assertTrue(hasattr(member, 'add_activity'))
        self.assertTrue(callable(getattr(member, 'add_activity', None)))

    def test_g_add_activity_increases_activity_count(self):
        member = Member('A', 'B', date(2018, 1, 1), 0)
        member.add_activity('name1', 'place1', 'start_date', 'cost1')
        self.assertEqual(len(member.all_my_activities), 1)
        member.add_activity('name2', 'place2', 'start_date', 'cost2')
        self.assertEqual(len(member.all_my_activities), 2)


if __name__ == '__main__':
    unittest.main(verbosity=3)
