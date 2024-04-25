const Traveler = require('./traveler')


class Vacationer extends Traveler {
    constructor(name, origin, destination, vacationType) {
       super(name, origin, destination)
       this.vacationType = vacationType

    }

    describe(){
        return `Traveler: ${this.name}, Origin: ${this.origin}, Destination: ${this.destination}, Vacation Type: ${this.vacationType}`
    }
}

module.exports = Vacationer;