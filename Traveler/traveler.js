class Traveler {
    constructor(name, origin, destination) {
        this.name = name
        this.origin = origin
        this.destination = destination 

    }

    describe(){
        return `Traveler: ${this.name}, Origin: ${this.origin}, Destination: ${this.destination}`
    }
}

module.exports = Traveler;