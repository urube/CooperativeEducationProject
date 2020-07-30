from dog import Dog


class Owner:
    def __init__(self, new_id, new_first_name, new_last_name, new_birth_date, the_kennel):
        self.id = new_id
        self.first_name = new_first_name
        self.last_name = new_last_name
        self.birth_date = new_birth_date
        self.my_kennel = the_kennel
        self.all_my_dogs = []

    def sort_dogs(self):
        self.all_my_dogs = sorted(self.all_my_dogs, key=lambda dog: dog.id)

    def __str__(self):
        return f'{self.first_name}, {self.last_name} [{self.id}]'

    def add_dog(self, new_name, new_breed, new_gender, new_favorite_food):
        new_dog = Dog(self, new_name, new_favorite_food, new_breed, new_gender)
        self.all_my_dogs.append(new_dog)

    def has_one_dog(self):
        return len(self.all_my_dogs) == 1

    def get_dogs(self):
        result = ''
        for a_dog in self.all_my_dogs:
            result += '  ' + str(a_dog) + '\n'
        return result
