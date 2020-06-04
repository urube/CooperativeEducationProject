class Cat:
    def __init__(self, the_owner, new_name, new_breed, new_gender, new_secret_name):
        self.my_owner = the_owner
        self.name = new_name
        self.breed = new_breed
        self.gender = new_gender
        self.secret_name = new_secret_name

    def __str__(self):
        return f'{self.name} ({self.gender}) aka {self.secret_name}'
