const Booking = require('./booking.js')


class GroupBooking extends Booking {
    constructor(groupSize,customerName, date, time, numberOfGuests) {
        super(customerName, date, time, numberOfGuests)
        this.groupSize = groupSize

    }

    message(){
        return `Your reservation at ${this.name}, located at ${this.address} has the following dress code: ${this.dressCode}`
    }
}

module.exports = GroupBooking;