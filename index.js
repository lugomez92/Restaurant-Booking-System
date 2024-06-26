

const prompt = require('prompt-sync')();
const { fineObj, casualObj } = require('./createInstances.js');
const Booking = require('./Booking/booking.js');
const Casual = require('./Restaurant/casual.js');
const FineDining = require('./Restaurant/fineDining.js');
const Vacationer = require('./Traveler/vacationer.js');
const BusinessTraveler = require('./Traveler/businessTraveler.js');
const chalk = require('chalk');


console.log(chalk.green("Welcome to MysteryMunch, where our random booking system takes you on a flavorful journey to discover new restaurants and culinary surprises!"));

const prompts = {
    name: chalk.blue("Please enter your name: "),
    date: chalk.blue("What is your booking date? "),
    time: chalk.blue("Please enter your preferred time: "),
    guests: chalk.blue("How many guests should we expect? "),
    travelerType: chalk.blue("Are you here on business or vacation? "),
    origin: chalk.blue("What city are you coming from? "),
    invalidTravelerType: chalk.red("Invalid answer, please choose vacation or business: "),
    diningStyle: chalk.blue("Do you fancy a luxurious fine dining experience or perhaps a more laid back dinner? Please choose Fine or Casual: "),
    invalidDiningStyle: chalk.red("Invalid answer, please choose Fine or Casual: "),
    fineType: chalk.blue("Would you prefer French, Japanese or American? "),
    casualType: chalk.blue("Would you prefer French, American, Mexican or Pizza? ")
};

function getUserInput(promptMessage) {
    return prompt(promptMessage);
}

function handleTravelerType() {
    let travelerType;
    while (!travelerType || (travelerType !== "business" && travelerType !== "vacation")) {
        travelerType = getUserInput(prompts.travelerType);
        if (travelerType === "business") {
            console.log(chalk.green(`${origin} is a beautiful place! Welcome to NYC! We're happy to assist you with booking the perfect dining spot for your business.`));
            return new BusinessTraveler(customerName, origin);
        } else if (travelerType === "vacation") {
            console.log(chalk.green(`${origin} is a beautiful place! Welcome to NYC! We're happy to assist you with booking the perfect dining spot for your vacation.`));
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
            console.log(chalk.green("Excellent choice! We'll make sure you have an unforgettable fine dining experience."));
            const fineType = getUserInput(prompts.fineType).toLowerCase();
            const fineChoice = fineObj[fineType];
            return getRandomRestaurant(fineChoice);
        } else if (diningChoice === "casual") {
            console.log(chalk.green("Great! A casual dining experience it is. We'll find you the perfect spot."));
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
    console.log(chalk.magenta(`Thank you ${booking.customerName}! You have made a reservation at ${restaurant.name} for ${booking.numberOfGuests} people on ${booking.date} at ${booking.time}`));
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






