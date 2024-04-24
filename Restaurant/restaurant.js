class Restaurant {
    constructor(name, address, cuisineType) {
        this.name = name
        this.address = address
        this.cuisineType = cuisineType

    }

    describe(){
        return `The restaurant ${this.name}, located at ${this.address} serves ${this.cuisineType}`
    }
}

module.exports = Restaurant;