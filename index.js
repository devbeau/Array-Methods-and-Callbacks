import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
*/
//(a) Home Team name for 2014 world cup final 
console.log("Task 1(a): ", "Germany");
//(b) Away Team name for 2014 world cup final
console.log("Task 1(b): ", "Argentina");
//(c) Home Team goals for 2014 world cup final
console.log("Task 1(c): ", 1);
//(d) Away Team goals for 2014 world cup final
console.log("Task 1(d): ", 0);
//(e) Winner of 2014 world cup final */
console.log("Task 1(e): ", "Germany");

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((item) => item.Stage === "Final");
};
console.log("This is Task 2:", getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {
    return getFinals.map((item) => item.Year);
};

const years = getYears(getFinals(fifaData));
console.log("This is Task 3: ", years);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    return (getFinals.map(function (item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]){
            return item["Home Team Name"];
        } else {
            return item["Away Team Name"];
        }
    }
    ))};

const winners = getWinners(getFinals(fifaData));
console.log("This is Task 5", winners);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    const stringArray = [];
    let winners = getWinners;
    let years = getYears;
    years.forEach(function (item, index){
      stringArray.push(`In ${item}, ${winners[index]} won the world cup!`)
    });
    return stringArray;
}


const stringArray = getWinnersByYear(winners, years);
console.log("This is Task 6:", stringArray);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const avgHomeArr = data.map((item) => item["Home Team Goals"]);
    const avgAwayArr = data.map((item) => item["Away Team Goals"]);
    const avgHomeAcc = avgHomeArr.reduce((acc, cur) => acc + cur);
    const avgAwayAcc = avgAwayArr.reduce((acc, cur) => acc + cur);
    const avgHome = avgHomeAcc / data.length;
    const avgAway = avgAwayAcc / data.length;
    return `Home Avg: ${avgHome} Away Avg: ${avgAway}`;
};

console.log("This is Task 7:", getAverageGoals(getFinals(fifaData)));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {

    let winningInitials = [];
    function initialsFunction(data) {
        return (data.map((item) => {
            if (item["Home Team Goals"] > item["Away Team Goals"]){
                console.log(item["Home Team Initials"]);
                return item["Home Team Initials"];
            } else {
                console.log(item["Away Team Initials"]);
                return item["Home Team Initials"];
            }
        }))
    };
    winningInitials = initialsFunction(data);
    console.log(winningInitials);

    const winningBool = winningInitials.map((item) => {
        if (teamInitials === item){
            return 1;
        }
        else {return 0;}
    })
    console.log(winningBool);
    
   return winningBool.reduce((acc, cur) => acc + cur);
};

console.log("This is Stretch 1:", getCountryWins(getFinals(fifaData), "ARG"));

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

   function teamGoals(teamInitials){  
       data.map((item) => {
       if (item["Home Team Initials"] === teamInitials){
            return [item["Home Team Initials"], item["Home Team Goals"], 1];
        } else if (item["Away Team Initials"] === teamInitials){
            return [item["Away Team Initials"], item["Away Team Goals"], 1];
        }

        });
    return teamGoals(teamInitials);
    }   
    const uruGoals = (teamGoals("URU").reduce((acc, cur) => acc + cur) / teamGoals("URU").length);
    const itaGoals = (teamGoals("ITA").reduce((acc, cur) => acc + cur) / teamGoals("ITA").length);
    const frgGoals = (teamGoals("FRG").reduce((acc, cur) => acc + cur) / teamGoals("FRG").length);
    const braGoals = (teamGoals("BRA").reduce((acc, cur) => acc + cur) / teamGoals("BRA").length);
    const argGoals = (teamGoals("ARG").reduce((acc, cur) => acc + cur) / teamGoals("ARG").length);
    const fraGoals = (teamGoals("FRA").reduce((acc, cur) => acc + cur) / teamGoals("FRA").length);
    const espGoals = (teamGoals("ESP").reduce((acc, cur) => acc + cur) / teamGoals("ESP").length);
    const gerGoals = (teamGoals("GER").reduce((acc, cur) => acc + cur) / teamGoals("GER").length);

    let mostGoals = Math.max(uruGoals, itaGoals, frgGoals, braGoals,argGoals, fraGoals, espGoals,gerGoals);

}
getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
