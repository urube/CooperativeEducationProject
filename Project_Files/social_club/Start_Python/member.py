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
