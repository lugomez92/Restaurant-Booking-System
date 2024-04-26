const Traveler = require('./traveler')


class Vacationer extends Traveler {
    constructor(name, origin, vacationType) {
       super(name, origin)
       this.vacationType = vacationType
       this.destination = "New York City"

    }

    describe(){
        return `Traveler: ${this.name}, Origin: ${this.origin}, Destination: ${this.destination}, Vacation Type: ${this.vacationType}`
    }
}

module.exports = Vacationer;