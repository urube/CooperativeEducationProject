import pytest
import controller
from datetime import date


class TestControllerAddActivitiesToMembers:

    def test_a_members_have_correct_activity_number(self):
        club = controller.setup()

        memberM01 = club.find_member('M01')
        assert len(memberM01.all_my_activities), 1

        memberM05 = club.find_member('M05')
        assert len(memberM05.all_my_activities), 3

        memberM02 = club.find_member('M02')
        assert len(memberM02.all_my_activities), 1

        memberM04 = club.find_member('M04')
        assert len(memberM04.all_my_activities), 1

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
        assert anActivity.name == 'Autumn Festival'
        assert anActivity.place == 'Arrowtown'
        assert anActivity.start_date == date(2018, 1, 1)
        assert anActivity.cost == 0

        memberM05 = club.find_member('M05')
        anActivity = memberM05.all_my_activities[0]
        assert anActivity.name == 'Joyride Carnival'
        assert anActivity.place == 'Auckland'
        assert anActivity.start_date == date(2019, 5, 2)
        assert anActivity.cost == 300.00

        memberM05 = club.find_member('M05')
        anActivity = memberM05.all_my_activities[1]
        assert anActivity.name == 'Easter High Tea'
        assert anActivity.place == 'Wellington'
        assert anActivity.start_date == date(2018, 12, 10)
        assert anActivity.cost == 150.00

        memberM05 = club.find_member('M05')
        anActivity = memberM05.all_my_activities[2]
        assert anActivity.name == 'Festival of Colour'
        assert anActivity.place == 'Hamilton'
        assert anActivity.start_date == date(2018, 11, 7)
        assert anActivity.cost == 0

        memberM02 = club.find_member('M02')
        anActivity = memberM02.all_my_activities[0]
        assert anActivity.name == 'Wine and Food Festival'
        assert anActivity.place == 'Napier'
        assert anActivity.start_date == date(2020, 10, 20)
        assert anActivity.cost == 350.00

        memberM04 = club.find_member('M04')
        anActivity = memberM04.all_my_activities[0]
        assert anActivity.name == 'Music in Park'
        assert anActivity.place == 'Hamilton'
        assert anActivity.start_date == date(2018, 12, 8)
        assert anActivity.cost == 0


if __name__ == "__main__":
    pytest.main(['-v', '-s', 'pytest_question05.py'])
    # pytest.main(['-v', '-s'])
