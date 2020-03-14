import unittest
import controller
from datetime import date


class TestControllerAddActivitiesToMembers(unittest.TestCase):
    def test_a_members_have_correct_activity_number(self):
        club = controller.setup()

        memberM01 = club.find_member('M01')
        self.assertEqual(len(memberM01.all_my_activities), 1)

        memberM05 = club.find_member('M05')
        self.assertEqual(len(memberM05.all_my_activities), 3)

        memberM02 = club.find_member('M02')
        self.assertEqual(len(memberM02.all_my_activities), 1)

        memberM04 = club.find_member('M04')
        self.assertEqual(len(memberM04.all_my_activities), 1)

        # MemberID  Name                    Place       Start Date  Cost
        # M01       Autumn Festival         Arrowtwon   01/01/2018  $0.00
        # M05       Joyride Carnival        Auckland    05/02/2019  $300.00
        # M05       Easter High Tea         Wellington  10/12/2018  $150.00
        # M05       Festival of Colour      Hamilton    07/11/2018  $0.00
        # M02       Wine and Food Festival  Napier      10/20/2020  $350.00
        # M04       Music in Park           Hamilton    08/12/2018  $0.00

    def test_b_set_correct_format_of_activity_details(self):
        club = controller.setup()

        memberM01 = club.find_member('M01')
        anActivity = memberM01.all_my_activities[0]
        self.assertEqual(anActivity.name, 'Autumn Festival')
        self.assertEqual(anActivity.place, 'Arrowtown')
        self.assertEqual(anActivity.start_date, date(2018, 1, 1))
        self.assertEqual(anActivity.cost, 0)

        memberM05 = club.find_member('M05')
        anActivity = memberM05.all_my_activities[0]
        self.assertEqual(anActivity.name, 'Joyride Carnival')
        self.assertEqual(anActivity.place, 'Auckland')
        self.assertEqual(anActivity.start_date, date(2019, 5, 2))
        self.assertEqual(anActivity.cost, 300.00)

        memberM05 = club.find_member('M05')
        anActivity = memberM05.all_my_activities[1]
        self.assertEqual(anActivity.name, 'Easter High Tea')
        self.assertEqual(anActivity.place, 'Wellington')
        self.assertEqual(anActivity.start_date, date(2018, 12, 10))
        self.assertEqual(anActivity.cost, 150.00)

        memberM05 = club.find_member('M05')
        anActivity = memberM05.all_my_activities[2]
        self.assertEqual(anActivity.name, 'Festival of Colour')
        self.assertEqual(anActivity.place, 'Hamilton')
        self.assertEqual(anActivity.start_date, date(2018, 11, 7))
        self.assertEqual(anActivity.cost, 0)

        memberM02 = club.find_member('M02')
        anActivity = memberM02.all_my_activities[0]
        self.assertEqual(anActivity.name, 'Wine and Food Festival')
        self.assertEqual(anActivity.place, 'Napier')
        self.assertEqual(anActivity.start_date, date(2020, 10, 20))
        self.assertEqual(anActivity.cost, 350.00)

        memberM04 = club.find_member('M04')
        anActivity = memberM04.all_my_activities[0]
        self.assertEqual(anActivity.name, 'Music in Park')
        self.assertEqual(anActivity.place, 'Hamilton')
        self.assertEqual(anActivity.start_date, date(2018, 12, 8))
        self.assertEqual(anActivity.cost, 0)


if __name__ == '__main__':
    unittest.main(verbosity=3)
