// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
  return function(spec="special") {
    return `You are ${flair }${spec}${flair}!`;
  }
}
let Calculator = {
  add(){
    return 1 + 3;
  },
   subtract() {
        return 1 - 3 
    },
     multiply() {
        return 1 * 3 
    },
     divide() {
        return 10 / 5 
    },
}
function actionApplyer(startInt, arrayOfFunctions) {
  arrayOfFunctions.forEach(result => startInt = result(startInt));
    return startInt
}
