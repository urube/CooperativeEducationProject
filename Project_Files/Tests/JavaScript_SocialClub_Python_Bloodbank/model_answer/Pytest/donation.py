class Donation:
    def __init__(self, new_branch_name, new_town, new_when, new_blood_group):
        self.branch_name = new_branch_name
        self.town = new_town
        self.when = new_when
        self.blood_group = new_blood_group

    def __str__(self):
        return f'has blood group <{self.blood_group}> donated on {self.when} at {self.branch_name}'
