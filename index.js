

const prompt = require('prompt-sync')();
const { fineObj, casualObj } = require('./createInstances.js');
const Booking = require('./Booking/booking.js');
const Casual = require('./Restaurant/casual.js');
const FineDining = require('./Restaurant/fineDining.js');
const Vacationer = require('./Traveler/vacationer.js');
const BusinessTraveler = require('./Traveler/businessTraveler.js');

console.log("Welcome to the NYC restaurant booking system!");

const prompts = {
    name: "Please enter your name: ",
    date: "What is your booking date? ",
    time: "Please enter your preferred time: ",
    guests: "How many guests should we expect? ",
    travelerType: "Are you here on business or vacation? ",
    origin: "What city are you coming from? ",
    invalidTravelerType: "Invalid answer, please choose vacation or business: ",
    diningStyle: "Do you fancy a luxurious fine dining experience or perhaps a more laid back dinner? Please choose Fine or Casual: ",
    invalidDiningStyle: "Invalid answer, please choose Fine or Casual: ",
    fineType: "Would you prefer French, Japanese or American? ",
    casualType: "Would you prefer French, American, Mexican or Pizza? "
};

function getUserInput(promptMessage) {
    return prompt(promptMessage);
}

function handleTravelerType() {
    let travelerType;
    while (!travelerType || (travelerType !== "business" && travelerType !== "vacation")) {
        travelerType = getUserInput(prompts.travelerType);
        if (travelerType === "business") {
            console.log(`${origin} is a beautiful place! Welcome to NYC! We're happy to assist you with booking the perfect dining spot for your business.`);
            return new BusinessTraveler(customerName, origin);
        } else if (travelerType === "vacation") {
            console.log(`${origin} is a beautiful place! Welcome to NYC! We're happy to assist you with booking the perfect dining spot for your vacation.`);
            return new Vacationer(customerName, origin);
        } else {
            console.log(prompts.invalidTravelerType);
        }
    }
}

function handleDiningChoice() {
    let diningChoice;
    while (!diningChoice || (diningChoice.toLowerCase() !== "fine" && diningChoice.toLowerCase() !== "casual")) {
        diningChoice = getUserInput(prompts.diningStyle).toLowerCase();
        if (diningChoice === "fine") {
            console.log("Excellent choice! We'll make sure you have an unforgettable fine dining experience.");
            const fineType = getUserInput(prompts.fineType).toLowerCase();
            const fineChoice = fineObj[fineType];
            return getRandomRestaurant(fineChoice);
        } else if (diningChoice === "casual") {
            console.log("Great! A casual dining experience it is. We'll find you the perfect spot.");
            const casualType = getUserInput(prompts.casualType).toLowerCase();
            const casualChoice = casualObj[casualType];
            return getRandomRestaurant(casualChoice);
        } else {
            console.log(prompts.invalidDiningStyle);
        }
    }
}

function getRandomRestaurant(restaurants) {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomIndex];
}

function addBooking(booking, restaurant) {
    restaurant.addRes(booking);
    console.log(`Thank you ${booking.customerName}! You have made a reservation at ${restaurant.name} for ${booking.numberOfGuests} people on ${booking.date} at ${booking.time}`);
}

function createBooking(customerName, date, time, numberOfGuests) {
    return new Booking(customerName, date, time, numberOfGuests);
}

const customerName = getUserInput(prompts.name);
const date = getUserInput(prompts.date);
const time = getUserInput(prompts.time);
const numberOfGuests = getUserInput(prompts.guests);
const origin = getUserInput(prompts.origin);

const traveler = handleTravelerType();
const restaurantChoice = handleDiningChoice();
const customerBooking = createBooking(customerName, date, time, numberOfGuests);

addBooking(customerBooking, restaurantChoice);




