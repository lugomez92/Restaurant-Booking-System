const Traveler = require('./traveler')


class BusinessTraveler extends Traveler {
    constructor(name, origin) {
       super(name, origin)
       this.destination = "New York City"

    }

    describe(){
        return `Traveler: ${this.name}, Origin: ${this.origin}, Destination: ${this.destination}, Company Name: ${this.companyName}`
    }
}

module.exports = BusinessTraveler;