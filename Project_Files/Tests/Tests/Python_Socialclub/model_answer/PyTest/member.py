from activity import Activity


class Member:
    def __init__(self, new_id, new_first_name, new_last_name, new_birth_date):
        self.id = new_id
        self.first_name = new_first_name
        self.last_name = new_last_name
        self.birth_date = new_birth_date
        self.all_my_activities = []

    def sort_activities(self):
        self.all_my_activities = sorted(self.all_my_activities, key=lambda activity: activity.start_date)

    def __str__(self):
        return f'{self.last_name}, {self.first_name} [{self.id}]'

    def add_activity(self, new_name, new_place, new_start_date, new_cost):
        an_activity = Activity(new_name, new_place, new_start_date, new_cost)
        self.all_my_activities.append(an_activity)

    def has_many_activities(self):
        return len(self.all_my_activities) > 1

    def get_activities(self):
        self.sort_activities()
        result = ''
        for an_activity in self.all_my_activities:
            result += '\t' + str(an_activity) + '\n'
        return result
