const {fineDiningRestaurants, casualDiningRestaurants} = require('./data.js')
const Restaurant = require('./Restaurant/restaurant.js')


function createFineDining(fineArr){

    let fineDining ={}
    
    fineArr.map((restaurant)=>{
        let name = restaurant.name
        let address = restaurant.address
        let cuisineType = restaurant.cuisineType.toLowerCase()
        let newRestaurant = new Restaurant(name,address,cuisineType)

        if(fineDining[cuisineType]){
            fineDining[cuisineType].push(newRestaurant)
        }
        else{
            fineDining[cuisineType] = [newRestaurant]
        }

    })

    return fineDining
}



function createCasualDining(casualArr){

    let casualDining ={}
    
    casualArr.map((restaurant)=>{
        let name = restaurant.name
        let address = restaurant.address
        let cuisineType = restaurant.cuisineType.toLowerCase()
        let newRestaurant = new Restaurant(name,address,cuisineType)

        if(casualDining[cuisineType]){
            casualDining[cuisineType].push(newRestaurant)
        }
        else{
            casualDining[cuisineType] = [newRestaurant]
        }

    })

    return casualDining
}

let fineObj = createFineDining(fineDiningRestaurants)
let casualObj = createCasualDining(casualDiningRestaurants)

// console.log(fineObj)
// console.log(casualObj)


module.exports = {
    fineObj,
    casualObj
}