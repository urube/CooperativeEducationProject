class Owner {
	constructor (newOwnerId, newFirstName, newLastName, newAmmountOwned, newCattery) {
		this.ownerId = newOwnerId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.ammountOwned = newAmmountOwned
		this.cattery = newCattery
		this.allMyCats = []
	}
	sortCats () {
		this.allMyCats.sort(function (a,b) {return a.name - b.name})
	}
	toString () {
		return `${this.firstName}, ${this.lastName} [${this.ownerId}]`
	}
	addCat () {

	}

}