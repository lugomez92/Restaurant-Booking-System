const Booking = require('./booking.js')


class EventBooking extends Booking {
    constructor(eventType,customerName, date, time, numberOfGuests) {
        super(customerName, date, time, numberOfGuests)
        this.eventType = eventType

    }

    message(){
        return `${this.customerName}, your ${this.eventType} reservation for ${this.numberOfGuests} people, on: ${this.date}, at:${this.time} has been booked.`
    }
}

module.exports = EventBooking;