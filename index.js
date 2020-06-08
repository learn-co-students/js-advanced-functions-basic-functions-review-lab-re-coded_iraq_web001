// Your code here
function saturdayFun(action = "roller-skate"){
  return `This Saturday, I want to ${action}!`
}
function mondayWork(action = "go to the office"){
  return `This Monday, I will ${action}.`
}

function wrapAdjective(flair = "*"){
  return function(para = "special"){
    return `You are ${flair}${para}${flair}!`
  }
}
let Calculator = {
  add : function (x,y){
    return x + y;
  },
  subtract : function (x,y){
    return x - y;
  },
  multiply : function (x,y){
    return x * y;
  },
  divide : function (x,y){
    return x / y;
  }
};

function actionApplyer(value, functionsArray){
  if(functionsArray.length === 0){
    return value;
  }
  else{
    value = functionsArray[0](value);
    value = functionsArray[1](value);
    value = functionsArray[2](value);
    return value;
  }
}
