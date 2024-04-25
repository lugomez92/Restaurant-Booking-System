const Booking = require('./booking.js')


class GroupBooking extends Booking {
    constructor(customerName, date, time, numberOfGuests) {
        super(customerName, date, time, numberOfGuests)
        

    }

    message(){
        return `${this.customerName}, your reservation for ${this.numberOfGuests} people, on: ${this.date}, at:${this.time} has been booked.`
    }
}

module.exports = GroupBooking;