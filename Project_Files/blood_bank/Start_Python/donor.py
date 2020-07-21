from donation import Donation


class Donor:
    def __init__(self, new_national_id, new_first_name, new_last_name, new_gender):
        self.id = new_national_id
        self.first_name = new_first_name
        self.last_name = new_last_name
        self.gender = new_gender
        self.all_my_donations = []

    def has_positive_blood_group(self):
        result = False
        for aDonations in self.all_my_donations:
            if aDonations.blood_group[len(aDonations.blood_group) - 1] == '+':
                result = True
                break
        return result

    def sort_donation(self):
        self.all_my_donations = sorted(self.all_my_donations, key=lambda donation: donation.blood_group)

    def add_donation(self, new_branch_name, new_town, new_when, new_blood_group):
        new_donation = Donation(new_branch_name, new_town, new_when, new_blood_group)
        self.all_my_donations.append(new_donation)

    def __str__(self):
        return f'{self.last_name}, {self.first_name} [{self.gender}]'

