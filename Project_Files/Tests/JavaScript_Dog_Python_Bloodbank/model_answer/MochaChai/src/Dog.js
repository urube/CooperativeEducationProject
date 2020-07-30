class Dog {
	constructor (theDogOwner, newName, newBreed, newGender, newFavoriteFood) {
    this.myDogOwner = theDogOwner
    this.name = newName
    this.breed = newBreed
    this.gender = newGender
    this.favoriteFood = newFavoriteFood
  }
  toString () {
  	return this.name + ' (' + this.gender + ') the ' + this.breed + ' who likes to eat ' + this.favoriteFood
  }
}