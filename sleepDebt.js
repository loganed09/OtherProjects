const getSleepHours = day => {
  if (day === 'monday'){
    return 8;
  } else if (day === 'tuesday'){
    return 8;
  } else if (day === 'wednesday'){
    return 8;
  }else if (day === 'thursday'){
    return 8;
  }else if (day === 'friday'){
    return 4;
  }else if (day === 'saturday'){
    return 3;
  }else if (day === 'sunday'){
    return 6;
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  console.log(`You slept for ${actualSleepHours} hours out of your ${idealSleepHours} hours of ideal sleep.`);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep this week!');
  }else if (actualSleepHours > idealSleepHours){
    const sleepDebt = actualSleepHours - idealSleepHours;
    console.log(`You got more sleep than you needed this week. You slept ${sleepDebt} hours over!`);
  }else if (actualSleepHours < idealSleepHours){
    const sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`You need to get more sleep! You need ${sleepDebt} more hours!`);
  }
}


//console.log(getSleepHours('saturday'));
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
calculateSleepDebt();
