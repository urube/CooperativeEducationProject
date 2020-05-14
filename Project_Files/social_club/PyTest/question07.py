import pytest
from club import Club
from member import Member
from activity import Activity
from datetime import date
import controller
import re


class TestClubDisplayBusyMembers:
    def test_aw_club_display_busy_members_exists(self):
        club = Club()
        assert hasattr(club, 'display_busy_members')
        assert callable(getattr(club, 'display_busy_members', None))

    def test_ax_club_display_busy_members_returns_string(self):
        club = Club()
        returned = club.display_busy_members()
        assert isinstance(returned, str)

    def test_ay_club_display_busy_members_not_hard_coded(self):
        club = Club()
        returned = club.display_busy_members()
        assert len(returned) == 0

    def test_az_club_display_busy_members__returns_false_without_any__member(self):
        club = Club()
        returned = club.display_busy_members()
        assert not returned, True


class TestClubDisplayMembers:

    @pytest.fixture(scope='session')
    def set_data(self):
        member = Member('id', 'first_name', 'last_name', 'birth_date')
        return member

    def test_bx_display_member__str__exists(self, set_data):
        member = set_data
        assert type(member).__str__ is not object.__str__

    def test_by_display_member__str__returns_string(self, set_data):
        member = set_data
        returned = str(member)
        assert isinstance(returned, str)

    def test_bz_display_member__str__works(self, set_data):
        member = set_data
        returned = str(member)
        assert returned == 'last_name, first_name [id]'


class TestMemberHasManyActivities:

    @pytest.fixture(scope='session')
    def set_data(self):
        member = Member('id', 'first_name', 'last_name', 'birth_date')
        return member

    def test_yx_member_has_many_activities_exists(self, set_data):
        member = set_data
        assert hasattr(member, 'has_many_activities')
        assert callable(getattr(member, 'has_many_activities', None))

    def test_yy_has_many_activities_returns_false_with_zero_activity(self, set_data):
        member = set_data
        returned = member.has_many_activities()
        assert returned == False


class TestMemberHasGetActivities:

    @pytest.fixture(scope='session')
    def set_data(self):
        member = Member('id', 'first_name', 'last_name', 'birth_date')
        return member

    def test_za_member_has_get_activities_exists(self, set_data):
        member = set_data
        assert hasattr(member, 'get_activities')
        assert callable(getattr(member, 'get_activities', None))

    def test_zb_member_has_get_activities_str_returns_string(self, set_data):
        member = set_data
        returned = member.get_activities()
        assert isinstance(returned, str)


class TestActivityStr:

    @pytest.fixture(scope='session')
    def set_data(self):
        activity = Activity('name', 'place', date(2019, 5, 14), 'cost')
        return activity

    def test_cx_activity__str__exists(self, set_data):
        activity = set_data
        assert type(activity).__str__ is not object.__str__

    def test_cy_activity_not_hard_coded(self, set_data):
        activity = set_data
        returned = str(activity)
        assert returned == 'name starts on 05/14/19 at place'

    def test_cz_activity__str__works(self, set_data):
        activity = set_data
        returned = str(activity)
        assert returned == 'name starts on 05/14/19 at place'


class TestClubDisplayBusyMembersFormat:
    def test_d_members_last_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'^Beam'
        assert re.search(expected, returned)

    def test_e_puntuation_after_last_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,]'
        assert re.search(expected, returned)

    def test_f_space_after_puntuation(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_g_club_display_first_name(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'.*Jim'
        assert re.search(expected, returned)

    def test_h_space_after_first_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_i_member_id(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[M00]'
        assert re.search(expected, returned)

    def test_j_after_id_starts_new_line(self):
        club = controller.setup()
        returned = club.display_members()
        expected = r'[\n]'
        assert re.search(expected, returned)

    def test_k_tab_before_Activity_Details(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[\n]'
        assert re.search(expected, returned)


class TestClubDisplayMemberFirstActivity:
    def test_aa_members_first_activity_details(self):
        club = controller.setup()
        member = club.find_member(target_member_id='M05')
        activity = member.all_my_activities[0]
        assert type(activity).__str__ is not object.__str__

    def test_xa_tab_before_first_Activity_Details(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[\t]'
        assert re.search(expected, returned)

    def test_ab_display_activity_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'Festival of Colour'
        assert re.search(expected, returned)

    def test_ac_space_after_activity_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'Festival of Colour\s'
        assert re.search(expected, returned)

    def test_ad_say_starts_on(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'starts on'
        assert re.search(expected, returned)

    def test_ae_space_after_starts_on(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_af_display_start_date(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'11/07/18'
        assert re.search(expected, returned)

    def test_ag_space_after_start_date(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_ah_say_at(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'at'
        assert re.search(expected, returned)

    def test_ai_space_after_at(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_aj_display_hamilton(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'Hamilton'
        assert re.search(expected, returned)

    def test_ak_line_should_end(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[\n]'
        assert re.search(expected, returned)


######################################################


class TestClubDisplayMemberSecondActivity:
    def test_ba_members_second_activity_details(self):
        club = controller.setup()
        member = club.find_member(target_member_id='M05')
        activity = member.all_my_activities[1]
        assert type(activity).__str__ is not object.__str__

    def test_xb_tab_before_second_Activity_Details(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[\t]'
        assert re.search(expected, returned)

    def test_bb_display_activity_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'Easter High Tea'
        assert re.search(expected, returned)

    def test_bc_space_after_activity_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_bd_say_starts_on(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'starts on'
        assert re.search(expected, returned)

    def test_be_space_after_start_on(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_bf_display_starts_date(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'12/10/18'
        assert re.search(expected, returned)

    def test_bg_space_after_start_date(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_bh_say_at(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'at'
        assert re.search(expected, returned)

    def test_bi_space_after_at(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_bj_display_Wellington(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'Wellington'
        assert re.search(expected, returned)

    def test_bk_line_should_end_and_tab_here(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[\n\t]'
        assert re.search(expected, returned)


###########################################################
class TestClubDisplayMemberThirdActivity:
    def test_ca_members_third_activity_details(self):
        club = controller.setup()
        member = club.find_member(target_member_id='M05')
        activity = member.all_my_activities[0]
        assert type(activity).__str__ is not object.__str__

    def test_xc_tab_before_first_Activity_Details(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[\t]'
        assert re.search(expected, returned)

    def test_cb_display_activity_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'Joyride Carnival'
        assert re.search(expected, returned)

    def test_cc_space_after_activity_name(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_cd_say_starts_on(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'starts on'
        assert re.search(expected, returned)

    def test_ce_space_after_start_on(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_cf_display_starts_date(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'05/02/19'
        assert re.search(expected, returned)

    def test_cg_space_after_start_date(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_ch_say_at(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'at'
        assert re.search(expected, returned)

    def test_ci_space_after_at(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_cj_display_Auckland(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'Auckland'
        assert re.search(expected, returned)

    def test_ck_line_should_end_and_tab_here(self):
        club = controller.setup()
        returned = club.display_busy_members()
        expected = r'[\n\t]'
        assert re.search(expected, returned)


class TestClubDisplayBusyMembersWorks:
    def test_xxx_club_display_busy_members_works(self):
        club = controller.setup()
        returned = club.display_busy_members()
        assert returned == 'Beam, Jim [M05]\n\tFestival of Colour starts on 11/07/18 at Hamilton\n\tEaster High Tea ' \
                           'starts on 12/10/18 at Wellington\n\tJoyride Carnival starts on 05/02/19 at Auckland\n'


if __name__ == '__main__':
    pytest.main(['-v', '-s', 'question07.py'])
