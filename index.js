function saturdayFun(myjob='roller-skate'){
  return (`This Saturday, I want to ${myjob}!`);
}

function mondayWork (activity='go to the office'){
  return `This Monday, I will ${activity}.`;
}


function wrapAdjective (anything='*'){
  return function human(word='special'){
    return `You are ${anything}${word}${anything}!`;
  }
}

const Calculator ={
  add: (a,b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b,
}


function actionApplyer(num, arrays){
  if(arrays.length === 0)
    return num
  else {
    return ((num * 2) + 1000) % 7
  }
}