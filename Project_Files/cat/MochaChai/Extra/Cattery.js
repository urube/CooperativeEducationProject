class Cattery {
	constructor () {
	 this.allMyOwners = []
	}
	addOwner (newOwnerId, newFirstName, newLastName, newAmmountOwned) {
		var aOwner = new Owner (newOwnerId, newFirstName, newLastName, newAmmountOwned)
		this.allMyOwners.push(aOwner)
	}
	findOwner (targetOwnerId) {
		return this.allMyOwners.find(aOwner => aOwner.ownerId === targetOwnerId)
	}
	sortOwners () {
		this.allMyOwners.sort(function (a,b) {return a.ownerId-b.ownerId})
	}
	getOwners () {
		this.sortOwners()
		let result = ''
		for (let aOwner of this.allMyOwners) {
			result += aOwner + '\n'
		}
		return result
	}
	getThoseWithManyCats () {
		this.sortOwners()
		let result = ''
		for (let aOwner of this.allMyOwners) {
			if(aOwner.hasManyCats()) {
				result += str(aOwner) + '\n'
				result += aOwner.getCats()
			}
		}
		return result
	}
}