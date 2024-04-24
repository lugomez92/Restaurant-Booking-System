const Restaurant = require('./restaurant.js')


class FineDining extends Restaurant {
    constructor(name, address, cuisineType) {
        super(name, address, cuisineType)
        this.dressCode = "Formal"


    }

    message(){
        return `Your reservation at ${this.name}, located at ${this.address} has the following dress code: ${this.dressCode}`
    }
}

module.exports = FineDining;