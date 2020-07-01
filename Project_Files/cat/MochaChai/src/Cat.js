class Cat {
  constructor (theCatOwner, newName, newBreed, newGender, newSecretName) {
    this.myCatOwner = theCatOwner
    this.name = newName
    this.breed = newBreed
    this.gender = newGender
    this.secretName = newSecretName
  }
  toString () {
    return this.name + ' (' + this.gender + ') aka ' + this.secretName
  }
}