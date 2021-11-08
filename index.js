// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️



///// M V P ///////

/*✅ Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. ✅ What is the difference between counter1 and counter2?
    Answer: counter1 locks the count variable within the function so it cannot be accessed outside of the function.
  
  2. ✅ Which of the two uses a closure? How can you tell?
    Answer: counter1 uses a closure because the returned function accesses the count variable in its parent function.
  
  3. ✅ In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     Answer: With counter1, you could reuse the function to keep track of multiple different things by assigning the function to different variables. Whereas with counter2, the count is in the global scope and would get overwritten if you tried to use it to track different things, but it would be great if you needed to access the global count of a thing from different parts of your program.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}



/* ⚾️⚾️⚾️ ✅ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. ✅ Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
    return Math.floor(Math.random() * 3);
}

inning();

// TEST
// console.log(inning());



/* ⚾️⚾️⚾️ ✅ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. ✅ Receive the callback function `inning` that was created in Task 2 
  2. ✅ Receive a number of innings to be played
  3. ✅ After each inning, update the score of the home and away teams
  4. ✅ After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inningcb, inningCount){
  let totalHomeScore = 0;
  let totalAwayScore = 0;
  for (let i = 0; i < inningCount; i++) {
    totalHomeScore = totalHomeScore + inningcb();
    totalAwayScore = totalAwayScore + inningcb();
  }
  return {
    Home: totalHomeScore,
    Away: totalAwayScore,
  };
}

finalScore(inning, 9);

// TEST
// console.log(finalScore(inning, 9));



/* ⚾️⚾️⚾️ ✅ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. ✅ Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. ✅ Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(inningcb) {
  return {
    Home: inningcb(),
    Away: inningcb(),
  };
}

getInningScore(inning);

// TEST
// console.log(getInningScore(inning));



/* ⚾️⚾️⚾️ ✅ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. ✅ Receive the callback function `getInningScore` from Task 4
  2. ✅ Receive the callback function `inning` from Task 2
  3. ✅ Receive a number of innings to be played
  4. ✅ Return an array where each of it's index values equals a string stating the Home and Away team's scores for each inning.  Not the cummulative score.
  5. ✅ If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     ✅ If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(getInningScorecb, inningcb, inningCount) {
  const inningScores = [];
  let totalHomeScore = 0;
  let totalAwayScore = 0;
  for (let i = 0; i < inningCount; i++) {
    let inningScore = getInningScorecb(inning);
    totalHomeScore = totalHomeScore + inningScore.Home;
    totalAwayScore = totalAwayScore + inningScore.Away;
    inningScores.push(`Inning ${i + 1}: Away ${inningScore.Away} - Home ${inningScore.Home}`);
  }
  if (totalHomeScore === totalAwayScore) {
    inningScores.push(`This game will require extra innings: Away ${totalAwayScore} - Home ${totalHomeScore}`);
    return inningScores;
  } else {
    inningScores.push(`Final Score: Away ${totalAwayScore} - Home ${totalHomeScore}`);
    return inningScores;
  }
}

scoreboard(getInningScore, inning, 9);

// TEST
// console.log(scoreboard(getInningScore, inning, 9));



/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
