from cat import Cat


class Owner:
    def __init__(self, new_id, new_first_name, new_last_name, new_amount_owed, the_cattery):
        self.id = new_id
        self.first_name = new_first_name
        self.last_name = new_last_name
        self.amount_owed = new_amount_owed
        self.my_cattery = the_cattery
        self.all_my_cats = []

    def sort_cats(self):
        self.all_my_cats = sorted(self.all_my_cats, key=lambda cat: cat.name)

    def __str__(self):
        return f'{self.first_name}, {self.last_name} [{self.id}]'

    def add_cat(self, new_name, new_breed, new_gender, new_secret_name):
        new_cat = Cat(self, new_name, new_breed, new_gender, new_secret_name)
        self.all_my_cats.append(new_cat)
