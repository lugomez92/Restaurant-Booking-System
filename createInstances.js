const {fineDiningRestaurants, casualDiningRestaurants} = require('./data.js')

function createFineDining(fineArr){

    let fineDining ={}
    
    fineArr.map((restaurant)=>{
        let name = restaurant.name
        let address = restaurant.address
        let cuisineType = restaurant.cuisineType
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
        let cuisineType = restaurant.cuisineType
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

module.exports = {
    fineObj,
    casualObj
}