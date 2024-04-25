const prompt = require('prompt-sync')();

//requiring all subclasses
// const EventBooking = require('./Booking/event.js')
// const GroupBooking = require('./Booking/groupBooking.js')

const Booking = require('./Booking/booking.js')

const Diner = require('./Restaurant/diner.js')
const FineDining = require('./Restaurant/fineDining.js')

const Vacationer = require('./Traveler/vacationer.js')
const BusinessTraveler = require('./Traveler/businessTraveler.js')

//create new instances

// const fancyRestaurant = new FineDining("Eleven Madison Park", "11 Madison ave", "Upscale American")
// const casualRestaurant = new Diner("Cooper Town", "339 1st ave", "American")

//const eventVenue = new EventBooking()

console.log("Welcome to the NYC restaurant booking system!")





