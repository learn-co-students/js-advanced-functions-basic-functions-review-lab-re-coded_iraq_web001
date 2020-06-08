// Your code here
// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*"){
  return function(parameter1="special"){
    return `You are ${visualFlair}${parameter1}${visualFlair}!`

  }
}

let Calculator={
  add: ()=>(1+3),
  subtract: ()=>(1-3),
  multiply: ()=>(1*3),
  divide: ()=>(10/5)
}

function actionApplyer(startingInt, FnsArr) {
  if (FnsArr.length===0){
    return startingInt
  } else {
    let [add,subtract,multiply] = FnsArr;
    startingInt = add(startingInt)
    startingInt = subtract(startingInt)
    startingInt = multiply(startingInt)
    return startingInt
  }
}
