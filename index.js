import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


const fourteenFinal = fifaData.filter(function(x){
    return x.Year === 2014 && x.Stage === 'Final'
})


console.log(fourteenFinal)

console.log(fourteenFinal[0]["Home Team Name"]);

console.log(fourteenFinal[0]["Away Team Name"]); 

console.log(fourteenFinal[0]["Home Team Goals"]); 

console.log(fourteenFinal[0]["Away Team Goals"]); 

const fourteenWinner = fourteenFinal.map(function(x){
    if (x["Home Team Goals"] > x["Away Team Goals"]){
        return x["Home Team Name"]; 
    } else if (x["Home Team Goals"] < x["Away Team Goals"]){
        return x["Away Team Name"]; 
    }
})

console.log(fourteenWinner); 





// const fourteenHome = twentyFourteen.map(function(item){
//     return item["Home Team Name"];
// })



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// const getFinals = fifaData.filter(function(x){ 
//     return x.Stage === "Final"
// })

const getFinals = fifaData.filter(x => x.Stage === 'Final')

console.log(getFinals); 

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

const getYears = getFinals.map(x => x.Year)

console.log(getYears)

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// const winners = getFinals.map(x => x["Home Team Goals"] > x["Away Team Goals"] ? x["Home Team Name"]: x["Home Team Goals"] < x["Away Team Goals"] ? x["Away Team Name"])

const getWinners = getFinals.map(function(x){
    if (x["Home Team Goals"] > x["Away Team Goals"]){
        return x["Home Team Name"]; 
    } else if (x["Home Team Goals"] < x["Away Team Goals"]){
        return x["Away Team Name"]; 
    }
})

console.log(getWinners); 

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


// const getWinnersByYear = function(x, y){

//     return `In ${x}, ${y} won the world cup!`
// }

function getAllWinners(data) {
    data.forEach(match => {
        if(match["Stage"] === "Final"){
            if(match["Home Team Goals"] > match["Away Team Goals"]){
                console.log(`in ${match["Year"]}, ${match["Home Team Name"]} won the world cup!`)
            } else {
                console.log(`in ${match["Year"]}, ${match["Away Team Name"]} won the world cup!`)
            }
        }       
    });
};

console.log(getAllWinners(fifaData))

// console.log(getWinnersByYear(getYears, getWinners)) 

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */


// use getWinners and translate that to make an array with the initials of the winning teams of each year, 
// loop through that array and add a count (to a variable) for every time teamInitials shows up (use reduce)


// function getCountryWins(data, teamInitials) {
//     const winnersInitials = []
//     let count; 
    
//     if (data["Home Team Initials"] === teamInitials){
//     winnersInitials.reduce((total, x) => {
//         return total += x;
//       }, 0);
      
// };

// getCountryWins();


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

//add up total of data['Home Team Goals'] and divide by x.length 
//add up total of data['Away Team Goals'] and divide by x.length

function getAverageGoals(data) {

    const totalHome = data.reduce((total, x) => {
        return total += x["Home Team Goals"]
    }, 0); 

    const averageHome = totalHome/data.length 

    const totalAway = data.reduce((total, x) => {
        return total += x["Away Team Goals"]
    }, 0); 

    const averageAway = totalAway/data.length

    console.log(averageHome)
    console.log(averageAway)
};

getAverageGoals(fifaData);


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */