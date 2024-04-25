# Restaurant-Booking-System

# JavaScript Inheritance Exercise: Restaurant Booking System with Customer Service Bot

## Context and Overview

This exercise aims to help understand object-oriented programming in JavaScript by creating a restaurant booking system with classes and inheritance. Additionally, they will build a customer service bot that interacts with users to facilitate bookings.

## User Stories

### Basic Restaurant Class
- **As a developer,** I want to create a basic `Restaurant` class so that I can use it as a base for various types of restaurants.

### Specialized Restaurant Types
- **As a developer,** I want to extend the `Restaurant` class to create specific restaurant types (e.g., `FineDining`, `CasualDining`, `Cafe`) that have unique properties and methods.

### Booking Class
- **As a system admin,** I want to have a `Booking` class that can track the customer name, date, time, and number of guests so that the restaurant can manage reservations effectively.

### Inheritance for Special Bookings
- **As a developer,** I want to create specialized booking types (e.g., `GroupBooking`, `EventBooking`) by extending the `Booking` class to cater to specific needs like group sizes or events.

### Traveler Class
- **As a developer,** I want to create a `Traveler` class to manage information about people traveling, including name, origin, and destination, so they can interact with bookings and restaurants.

### Interaction Between Classes
- **As a user,** I want to be able to assign bookings to different types of restaurants, manage traveler details, and retrieve information about the bookings, the travelers, and the restaurant.

## Exercise Outline

Create a brand new repo and create a node project

### Part 1: Setting Up the Base Classes 
- **Task 1**: Create a `Restaurant` class with properties like `name`, `address`, `cuisineType`, and methods such as `describe()` which prints out a description of the restaurant.
- **Task 2**: Create a `Booking` class with properties including `customerName`, `date`, `time`, and `numberOfGuests`, and methods like `bookingDetails()` that outputs reservation details.
- **Task 3**: Create a `Traveler` class with properties like `name`, `origin`, and `destination`, and a method to display traveler details.

### Part 2: Implementing Inheritance 
- **Task 4**: Extend the `Restaurant` class to create different types of restaurants. For instance, `FineDining` might include additional properties like `dressCode`.
- **Task 5**: Extend the `Booking` class to create `GroupBooking` and `EventBooking`, adding properties like `groupSize` or `eventType`, with methods that override or extend the base class functionalities.
- **Task 6**: Extend the `Traveler` class for specific types of travelers, such as `BusinessTraveler` or `Vacationer`, adding specific needs and behaviors.

### Part 3: Interaction and Simulation with Customer Service Bot 
- **Task 7**: Install and utilize the `prompt-sync` module to create interactive prompts for the customer service bot.


npm install prompt-sync

- **Task 8**: Develop a script where the bot prompts the user to choose a type of restaurant, enter booking details, and interact with the system to make a reservation.
- **Task 9**: Use console logs to simulate the bot’s interaction, such as confirming a booking or suggesting alternative options based on the user’s input.

## Expected Learning Outcomes
By the end of this exercise, apprentices should be able to:
- Understand and apply JavaScript class syntax and constructors.
- Implement inheritance in JavaScript using `extends` and `super`.
- Integrate user input into a system using Node.js and prompt-sync.
- Develop interactive scripts that simulate real-world applications like a customer service bot.
