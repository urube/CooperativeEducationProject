class Cat {
	constructor (theOwner, newName, newBreed, newGender, newSecretName) {
		this.owner = theOwner
		this.name = newName
		this.breed = newBreed
		this.gender = newGender
		this.secretName = newSecretName
	}
	toString () {
		return `${this.name} (${this.gender}) aka ${this.secretName}`
	}
}