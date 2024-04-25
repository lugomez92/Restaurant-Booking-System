const Traveler = require('./traveler')


class BusinessTraveler extends Traveler {
    constructor(name, origin, destination, companyName) {
       super(name, origin, destination)
       this.companyName = companyName

    }

    describe(){
        return `Traveler: ${this.name}, Origin: ${this.origin}, Destination: ${this.destination}, Company Name: ${this.companyName}`
    }
}

module.exports = BusinessTraveler;