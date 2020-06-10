function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*"){
  return function(adjective = "special"){
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  };
}

let Calculator = {
  add: function(){
    return 1+3;
  },
  subtract: function(){
    return 1-3;
  },
  multiply: function(){
    return 1*3;
  },
  divide: function(){
    return 10/5;
  }
}

function actionApplyer(startInt, arr){
  if(arr.length === 0){
    return startInt;
  }else{
    let [add,subtract,multiply] = arr;
    startInt = add(startInt);
    startInt = subtract(startInt);
    startInt = multiply(startInt);
    return startInt;
  }
}