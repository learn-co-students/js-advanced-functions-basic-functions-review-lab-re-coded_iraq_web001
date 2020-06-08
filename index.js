// Your code here

function saturdayFun(activity = "roller-skate"){
  return`This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun('bathe the dog');

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
  return function(special="special") {
    return `You are ${style}${special}${style}!`
  }
}

const Calculator = {
  add: function() {
    return 1 + 3;
  },
  subtract: function() {
    return 1 - 3
  },
  multiply: function() {
    return 1 * 3
  },
  divide: function(){
    return 10 / 5
  }
}

function actionApplyer(start, array){
  for (let i = 0; i<array.length; i++){
    start = array[i](start)
  }
  return start
}