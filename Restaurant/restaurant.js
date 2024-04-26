class Restaurant {
    constructor(name, address, cuisineType) {
        this.name = name
        this.address = address
        this.cuisineType = cuisineType
        this.reservations=[]

    }

    describe(){
        return `The restaurant ${this.name}, located at ${this.address} serves ${this.cuisineType}`
    }
    addRes(booking){
        this.reservations.push(booking)
    }
}

module.exports = Restaurant;