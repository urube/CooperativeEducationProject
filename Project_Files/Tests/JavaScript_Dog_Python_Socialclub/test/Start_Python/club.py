from member import Member


class Club:
    def __init__(self):
        self.all_my_members = []

    def add_member(self, new_id, new_first_name, new_last_name, new_birth_date):
        new_member = Member(new_id, new_first_name, new_last_name, new_birth_date)
        self.all_my_members.append(new_member)

    def sort_members(self):
        self.all_my_members = sorted(self.all_my_members, key=lambda member: member.id)

    def find_member(self, target_member_id):
        return next((member for member in self.all_my_members if member.id == target_member_id), None)
