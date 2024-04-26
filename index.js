const prompt = require('prompt-sync')();
const {fineObj, casualObj} = require('./createInstances.js')

//requiring all subclasses


const Booking = require('./Booking/booking.js')

const Casual = require('./Restaurant/casual.js')
const FineDining = require('./Restaurant/fineDining.js')

const Vacationer = require('./Traveler/vacationer.js')
const BusinessTraveler = require('./Traveler/businessTraveler.js')



console.log("Welcome to the NYC restaurant booking system!")

// Prompt messages
const prompts = {
    name: "Please enter your name: ",
    date: "What is your booking date? ",
    time: "Please enter your preferred time: ",
    guests: "How many guests should we expect? ",
    travelerType: "Are you here on business or vacation? ",
    origin: "What city are you coming from? ",
    invalidTravelerType: "Invalid answer, please choose vacation or business: ",
    diningStyle: "Do you fancy a luxurious fine dining experience or perhaps a more laid back dinner? Please choose Fine or Casual: ",
    invalidDiningStyle: "Invalid answer, please choose Fine or Casual: "
}

const customerName = prompt(prompts.name);
const date = prompt(prompts.date);
const time = prompt(prompts.time);
const numberOfGuests = prompt(prompts.guests);
const origin = prompt(prompts.origin);



let travelerType;
let traveler;

while (!travelerType || (travelerType !== "business" && travelerType !== "vacation")) {
    travelerType = prompt(prompts.travelerType);
    if (travelerType === "business") {
        console.log(`${origin} is a beautiful place! Welcome to NYC! We're happy to assist you with booking the perfect dining spot for your business.`);
        traveler = new BusinessTraveler(customerName, origin);
    } else if (travelerType === "vacation") {
        console.log(`${origin} is a beautiful place! Welcome to NYC! We're happy to assist you with booking the perfect dining spot for your vacation.`);
        traveler = new Vacationer(customerName, origin);
    } else {
        console.log(prompts.invalidTravelerType);
    }
}

let diningChoice;
let chosenDining;

    while (!diningChoice || (diningChoice.toLowerCase() !== "fine" && diningChoice.toLowerCase() !== "casual")) {

        diningChoice = prompt(prompts.diningStyle).toLowerCase();
        if (diningChoice === "fine") {
           // chosenDining = new FineDining();
            console.log("Excellent choice! We'll make sure you have an unforgettable fine dining experience.");
        } else if (diningChoice === "casual") {
            //chosenDining = new Casual();
            console.log("Great! A casual dining experience it is. We'll find you the perfect spot.");
        } else {
            console.log(prompts.invalidDiningStyle);
        }
}



// Generate a random index
// const randomIndex = Math.floor(Math.random() * fineDiningRestaurants.length);

// // Access the random restaurant using the random index
// const randomRestaurant = fineDiningRestaurants[randomIndex];

// // Display the details of the random restaurant
// console.log("Name:", randomRestaurant.name);
// console.log("Address:", randomRestaurant.address);
// console.log("Cuisine Type:", randomRestaurant.cuisineType);




const newBooking = new Booking(customerName,date,time,numberOfGuests)
//console.log(newBooking)




