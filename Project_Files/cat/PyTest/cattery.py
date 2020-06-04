from owner import Owner


class Cattery:
    def __init__(self):
        self.all_my_owners = []

    def add_owner(self, new_id, new_first_name, new_last_name, new_amount_owed):
        new_owner = Owner(new_id, new_first_name, new_last_name, new_amount_owed, self)
        self.all_my_owners.append(new_owner)

    def find_owner(self, target_owner_id):
        return next((owner for owner in self.all_my_owners if owner.id == target_owner_id), None)

    def sort_owners(self):
        self.all_my_owners = sorted(self.all_my_owners, key=lambda owner: owner.id)

    def get_owners(self):
        result = ''
        self.sort_owners()
        for cat_owner in self.all_my_owners:
            result += str(cat_owner) + '\n'
        return result

    def get_those_with_many_cats(self):
        result = ''
        self.sort_owners()
        for owner in self.all_my_owners:
            if owner.has_many_cats():
                result += str(owner) + '\n'
                result += owner.get_cats()
        return result
