// Your code here

function saturdayFun(activity = "roller-skate"){

return `This Saturday, I want to ${activity}!` ;

}
saturdayFun();
saturdayFun('bathe my dog')

let mondayWork = function (activity = 'go to the office'){
  return `This Monday, I will ${activity}.`
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(wrapper = '*'){

  return function (adjective = 'special'){
    return `You are ${wrapper}${adjective}${wrapper}!`
  }
}
wrapAdjective()('a hard worker');
wrapAdjective('||')('dedicated programmer');

let Calculator= {
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  }

}
Calculator.add(1,3);
Calculator.subtract(1,3);
Calculator.multiply(1,3);
Calculator.divide(10,5);


function actionApplyer(startingInt , arr){
if(arr.length ===0){
  return startingInt;
}
else{
  let [multiply,add,mod]=arr;
  startingInt = multiply(startingInt);
  startingInt = add(startingInt);
  startingInt = mod(startingInt);
  return startingInt;
}
}
