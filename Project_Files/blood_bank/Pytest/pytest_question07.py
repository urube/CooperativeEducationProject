import pytest
import re
from bloodbank import BloodBank
from donation import Donation
from datetime import date
from donor import Donor
import controller


class TestClubDisplayPositiveDonation:
    def test_aw_blood_bank_display_positive_donors_exists(self):
        blood_bank = BloodBank()
        assert hasattr(blood_bank, 'display_positive_donations')
        assert callable(getattr(blood_bank, 'display_positive_donations', None))

    def test_ax_club_display_positive_donations_returns_string(self):
        blood_bank = BloodBank()
        returned = blood_bank.display_positive_donations()
        assert isinstance(returned, str)

    def test_ay_club_display_busy_members_not_hard_coded(self):
        blood_bank = BloodBank()
        returned = blood_bank.display_positive_donations()
        assert len(returned) == 0

    def test_az_club_display_busy_members__returns_false_without_any__member(self):
        blood_bank = BloodBank()
        returned = blood_bank.display_positive_donations()
        assert not returned, True


class TestBloodBankDisplayDonors:
    def test_bx_display_donor__str__exists(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        assert type(donor).__str__ is not object.__str__

    def test_by_display_donor__str__returns_string(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        returned = str(donor)
        assert isinstance(returned, str)

    def test_bz_display_donor__str__works(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        returned = str(donor)
        assert returned == 'last_name, first_name [gender]'


class TestDonorHasPositiveBloodGroup:
    def test_yx_donor_has_positive_blood_group_exists(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        assert hasattr(donor, 'has_positive_blood_group')
        assert callable(getattr(donor, 'has_positive_blood_group', None))

    def test_yy_has_positive_blood_group_returns_false_with_zero_donors(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        returned = donor.has_positive_blood_group()
        assert returned == False


class TestDonorHasGetDonations:
    def test_za_donor_has_get_donations_exists(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        assert hasattr(donor, 'get_donations')
        assert callable(getattr(donor, 'get_donations', None))

    def test_zb_donor_has_get_donations_str_returns_string(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        returned = donor.get_donations()
        assert isinstance(returned, str)


class TestDonationsStr:
    def test_cx_donations__str__exists(self):
        donation = Donation('branch', 'town', date(2020, 5, 8), 'blood_group')
        assert type(donation).__str__ is not object.__str__

    def test_cy_donations_not_hard_coded(self):
        donation = Donation('branch', 'town', date(2020, 5, 8), 'blood_group')
        returned = str(donation)
        assert returned == 'has blood group < blood_group> donated on 2020-05-08 at branch'

    def test_cz_donation__str__works(self):
        donation = Donation('branch', 'town', date(2020, 5, 8), 'blood_group')
        returned = str(donation)
        assert returned == 'has blood group < blood_group> donated on 2020-05-08 at branch'


# class TestDonorDisplayPositiveBloodGroupFormat:
#     def test_d_donors_last_name(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'^Moore'
#         assert re.search(expected, returned)
#
#     def test_e_punctuation_after_last_name(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'[,]'
#         assert re.search(expected, returned)
#
#     def test_f_space_after_punctuation(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'[,\s]'
#         assert re.search(expected, returned)
#
#     def test_g_club_display_first_name(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'.*Sandy'
#         assert re.search(expected, returned)
#
#     def test_h_space_after_first_name(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'[,\s]'
#         assert re.search(expected, returned)
#
#     def test_i_donor_id(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'[F]'
#         assert re.search(expected, returned)
#
#     def test_j_after_id_starts_new_line(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'[\n]'
#         assert re.search(expected, returned)
#
#     def test_k_tab_before_donor_Details(self):
#         blood_bank = controller.setup()
#         returned = blood_bank.display_positive_donations()
#         expected = r'[\t]'
#         assert re.search(expected, returned)


class TestBloodBankDisplayDonorFirstDonation:
    def test_aa_donor_first_donation_details(self):
        blood_bank = controller.setup()
        donor = blood_bank.find_donor(target_donor_id=4023500)
        donation = donor.all_my_donations[0]
        assert type(donation).__str__ is not object.__str__

    def test_xa_tab_before_first_Activity_Details(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
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
    pytest.main(['-vv', '-s', 'pytest_question07.py'])
