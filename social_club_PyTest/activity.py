class Activity:
    def __init__(self, new_name, new_place, new_start_date, new_cost):
        self.name = new_name
        self.place = new_place
        self.start_date = new_start_date
        self.cost = new_cost

    def __str__(self):
        return f'{self.name} starts on {self.start_date.strftime("%x")} at {self.place}'


