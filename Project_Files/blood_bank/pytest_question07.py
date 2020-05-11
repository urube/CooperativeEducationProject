import pytest
import re
from bloodbank import BloodBank
from donation import Donation
from datetime import date
from donor import Donor
import controller


class TestBloodBankDisplayPositiveDonation:
    def test_aw_blood_bank_display_positive_donors_exists(self):
        blood_bank = BloodBank()
        assert hasattr(blood_bank, 'display_positive_donations')
        assert callable(getattr(blood_bank, 'display_positive_donations', None))

    def test_ax_club_display_positive_donations_returns_string(self):
        blood_bank = BloodBank()
        returned = blood_bank.display_positive_donations()
        assert isinstance(returned, str)

    def test_ay_club_display_positive_donations_not_hard_coded(self):
        blood_bank = BloodBank()
        returned = blood_bank.display_positive_donations()
        assert len(returned) == 0

    def test_az_club_display_positive_donations_returns_false_without_any__member(self):
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


class TestDonorHasPositiveBloodGroupFunction:
    def test_yx_donor_has_positive_blood_group_exists(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        assert hasattr(donor, 'has_positive_blood_group')
        assert callable(getattr(donor, 'has_positive_blood_group', None))

    def test_yy_has_positive_blood_group_returns_false_with_zero_donors(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        returned = donor.has_positive_blood_group()
        assert returned == False

    def test_yz_has_positive_blood_group_should_be_true(self):
        donor = Donor('id', 'first_name', 'last_name', 'gender')
        donor.add_donation('test', 'test', 'test', 'AB+')
        returned = donor.has_positive_blood_group()
        assert returned == True


class TestDonorHasGetDonationsFunction:
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
        assert returned == 'has blood group <blood_group> donated on 2020-05-08 at branch'

    def test_cz_donation__str__works(self):
        donation = Donation('branch', 'town', date(2020, 5, 8), 'blood_group')
        returned = str(donation)
        assert returned == 'has blood group <blood_group> donated on 2020-05-08 at branch'


class TestDonorDisplayPositiveBloodGroupFormat:
    def test_d_donors_last_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'^Moore'
        assert re.search(expected, returned)

    def test_e_punctuation_after_last_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,]'
        assert re.search(expected, returned)

    def test_f_space_after_punctuation(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_g_club_display_first_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'.*Sandy'
        assert re.search(expected, returned)

    def test_h_space_after_first_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[Sandy\s]'
        assert re.search(expected, returned)

    def test_i_donor_id(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[F]'
        assert re.search(expected, returned)

    def test_j_after_id_starts_new_line(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\n]'
        assert re.search(expected, returned)

    def test_k_tab_before_donor_Details(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\t]'
        assert re.search(expected, returned)


class TestDonorFirstDonation:
    def test_aa_first_donor_first_donation_details(self):
        blood_bank = controller.setup()
        donor = blood_bank.find_donor(target_donor_id=4023500)
        donation = donor.all_my_donations[0]
        assert type(donation).__str__ is not object.__str__

    def test_xa_tab_before_first_Donation_Details(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'\t'
        assert re.search(expected, returned)

    def test_ab_say_has_blood_group(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'has blood group'
        assert re.search(expected, returned)

    def test_ac_space_after_has_blood_group(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'has blood group\s'
        assert re.search(expected, returned)

    def test_ad_should_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'<'
        assert re.search(expected, returned)

    def test_ae_blood_group_should_be_AB_positive(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'AB+'
        assert re.search(expected, returned)

    def test_af_should_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'>'
        assert re.search(expected, returned)

    def test_ag_space_after_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_ah_say_donated_on(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'donated on'
        assert re.search(expected, returned)

    def test_ai_space_after_donated_on(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_aj_display_donation_date(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'2018-11-01'
        assert re.search(expected, returned)

    def test_ak_should_single_space(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\s]'
        assert re.search(expected, returned)

    def test_al_should_say_at(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'at'
        assert re.search(expected, returned)

    def test_am_should_single_space_after_at(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\s]'
        assert re.search(expected, returned)

    def test_an_should_branch_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'Christchurch'
        assert re.search(expected, returned)

    def test_ao_line_ends_here(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'Christchurch\n'
        assert re.search(expected, returned)


######################################################


class TestDisplayPositiveDonationFunctionReturnsSecondDonorFormat:
    def test_ba_First_donor_details(self):
        blood_bank = controller.setup()
        donor = blood_bank.find_donor(target_donor_id=4023500)
        donation = donor.all_my_donations[0]
        assert type(donation).__str__ is not object.__str__

    def test_xb_tab_before_second_donor_Details(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\t]'
        assert re.search(expected, returned)

    def test_bb_display_donor_last_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'.*Watts'
        assert re.search(expected, returned)

    def test_bc_space_after_donor_last_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_bd_donor_first_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'Jonathan'
        assert re.search(expected, returned)

    def test_be_space_after_first_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_bf_should_be_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[M]'
        assert re.search(expected, returned)

    def test_bg_should_be_newline(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\n]'
        assert re.search(expected, returned)

    def test_bh_line_should_end_and_tab_here(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\n\t]'
        assert re.search(expected, returned)


###########################################################
class TestDisplaySecondDonorFirstDonationDetails:
    def test_ca_second_donor_first_donation_details(self):
        blood_bank = controller.setup()
        donor = blood_bank.find_donor(target_donor_id=9800100)
        donation = donor.all_my_donations[0]
        assert type(donation).__str__ is not object.__str__

    def test_xc_tab_before_first_Donation_Details(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'\t'
        assert re.search(expected, returned)

    def test_cb_say_has_blood_group(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'has blood group'
        assert re.search(expected, returned)

    def test_cc_space_after_has_blood_group(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'has blood group\s'
        assert re.search(expected, returned)

    def test_cd_should_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'<'
        assert re.search(expected, returned)

    def test_ce_blood_group_should_be_AB_positive(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'AB+'
        assert re.search(expected, returned)

    def test_cf_should_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'>'
        assert re.search(expected, returned)

    def test_cg_space_after_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_ch_say_donated_on(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'donated on'
        assert re.search(expected, returned)

    def test_ci_space_after_donated_on(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_cj_display_donation_date(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'2017-10-09'
        assert re.search(expected, returned)

    def test_ck_should_single_space(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\s]'
        assert re.search(expected, returned)

    def test_cl_should_say_at(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'at'
        assert re.search(expected, returned)

    def test_cm_should_single_space_after_at(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\s]'
        assert re.search(expected, returned)

    def test_cn_should_branch_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'Nelson'
        assert re.search(expected, returned)

    def test_co_line_ends_here(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'Nelson\n'
        assert re.search(expected, returned)


class TestDisplaySecondDonorSecondDonationDetails:
    def test_da_second_donor_first_donation_details(self):
        blood_bank = controller.setup()
        donor = blood_bank.find_donor(target_donor_id=9800100)
        donation = donor.all_my_donations[1]
        assert type(donation).__str__ is not object.__str__

    def test_xd_tab_before_first_Donation_Details(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'\t'
        assert re.search(expected, returned)

    def test_db_say_has_blood_group(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'has blood group'
        assert re.search(expected, returned)

    def test_dc_space_after_has_blood_group(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'has blood group\s'
        assert re.search(expected, returned)

    def test_dd_should_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'<'
        assert re.search(expected, returned)

    def test_de_blood_group_should_be_AB_positive(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'AB+'
        assert re.search(expected, returned)

    def test_df_should_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'>'
        assert re.search(expected, returned)

    def test_dg_space_after_enclosed(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_dh_say_donated_on(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'donated on'
        assert re.search(expected, returned)

    def test_di_space_after_donated_on(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[,\s]'
        assert re.search(expected, returned)

    def test_dj_display_donation_date(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'2018-09-05'
        assert re.search(expected, returned)

    def test_dk_should_single_space(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\s]'
        assert re.search(expected, returned)

    def test_dl_should_say_at(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'at'
        assert re.search(expected, returned)

    def test_dm_should_single_space_after_at(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'[\s]'
        assert re.search(expected, returned)

    def test_dn_should_branch_name(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'Otago'
        assert re.search(expected, returned)

    def test_do_line_ends_here(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        expected = r'\n'
        assert re.search(expected, returned)


class TestClubDisplayBusyMembersWorks:
    def test_xxx_blood_bank_display_positive_donations_details(self):
        blood_bank = controller.setup()
        returned = blood_bank.display_positive_donations()
        assert returned == 'Moore, Sandy [F]\n\thas blood group <AB+> donated on 2018-11-01 at Christchurch\nWatson, ' \
                           'Cathy [F]\n\thas blood group <O+> donated on 2019-06-15 at Auckland\nWatts, ' \
                           'Jonathan [M]\n\thas blood group <AB+> donated on 2017-10-09 at Nelson\n\thas blood group ' \
                           '<AB+> donated on 2018-09-05 at Otago\n '


if __name__ == '__main__':
    pytest.main(['-vv', '-s', 'pytest_question07.py'])
