const Restaurant = require('./restaurant.js')


class Casual extends Restaurant {
    constructor(name, address, cuisineType,reservations) {
        super(name, address, cuisineType, reservations)
        this.dressCode = "Casual"


    }

    message(){
        return `Your reservation at ${this.name}, located at ${this.address} has the following dress code: ${this.dressCode}`
    }
}

module.exports = Casual;