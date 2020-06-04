class Dog:
    def __init__(self, the_owner, new_name, new_favorite_food, new_breed, new_gender):
        self.my_owner = the_owner
        self.name = new_name
        self.favorite_food = new_favorite_food
        self.breed = new_breed
        self.gender = new_gender

    def __str__(self):
        return f'{self.name} ({self.gender}) the {self.breed} who likes to eat {self.favorite_food}'
