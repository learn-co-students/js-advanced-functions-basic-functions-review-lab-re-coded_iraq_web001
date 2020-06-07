// Your code here
function saturdayFun(activity="roller-skate"){
 return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");
function mondayWork(target="go to the office"){
  return `This Monday, I will ${target}.`;
}
mondayWork();
mondayWork("I willwork from home");

function wrapAdjective(Flair="*") {
  return function (adjective='special') {
    return `You are ${Flair}${adjective}${Flair}!`
  }
}

let Calculator = {
  add:() => 1 + 3,
  subtract:  ()=> 1 - 3,
  multiply:  () => 1 * 3,
  divide: () => 10 / 5
  
}


function actionApplyer(startingInt, arrayOfFunctions) {
  if (!arrayOfFunctions.length){
    return startingInt
  } else {
    let [mult,add,mod] = arrayOfFunctions;
    startingInt =mult(startingInt)
    startingInt =add(startingInt)
    startingInt =mod(startingInt)
    return startingInt
  }
}