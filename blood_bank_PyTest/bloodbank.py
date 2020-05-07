from donor import Donor


class BloodBank:
    def __init__(self):
        self.all_my_donors = []

    def add_donor(self, new_national_id, new_first_name, new_last_name, new_gender):
        new_donor = Donor(new_national_id, new_first_name, new_last_name, new_gender)
        self.all_my_donors.append(new_donor)

    def find_donor(self, target_donor_id):
        return next((donor for donor in self.all_my_donors if donor.id == target_donor_id), None)

    def sort_donor(self):
        self.all_my_donors = sorted(self.all_my_donors, key=lambda donor: donor.id)

    def display_donor(self):
        self.sort_donor()
        result = ''
        for aDonor in self.all_my_donors:
            result += str(aDonor) + '\n'
        return result

    def displayPositiveDonations(self):
        self.sort_donor()
        result = ''
        for aDonor in self.all_my_donors:
            if aDonor.has_positive_bloodgroup():
                result += str(aDonor) + '\n'
                result += aDonor.get_donations()
        return result
