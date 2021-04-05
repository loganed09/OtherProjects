let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = false;
var runnerAge = 18;
console.log(raceNumber);

if (isRegisteredEarly && runnerAge > 18){
  raceNumber += 1000;
}


if (isRegisteredEarly && runnerAge > 18){
  console.log(`You race at 9:30 am, your number is ${raceNumber}!`);
} else if (!isRegisteredEarly && runnerAge > 18){
  console.log(`Late adulte run at 11:00 am, your number is ${raceNumber}!`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your number is ${raceNumber}!`);
} else {
  console.log('Please see registration desk.');
}
