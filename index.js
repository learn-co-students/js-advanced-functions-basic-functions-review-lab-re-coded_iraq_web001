// Your code here
function saturdayFun(activity="roller-skate"){
  return`This Saturday, I want to ${activity}!`;
};
saturdayFun();

function mondayWork(activity="go to the office"){
  return`This Monday, I will ${activity}.`;
};
mondayWork();

function wrapAdjective(visualFlair = "*" ) {
   return function innerFunction(adjective ="special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`
  }
}

let Calculator = {
add: function(){
  return 1 + 3 ;
},
subtract: function () {
  return 1-3;

},
multiply: function(){
  return 1 * 3;
},
divide: function(){
  return 10 / 5;
}
};

function actionApplyer(startingInt, arrayFn){
  if (arrayFn.length == 0) {
    return startingInt;
  } else {



    let [mult,add,mod] = arrayFn;
        startingInt = mult(startingInt)
        startingInt = add(startingInt)
        startingInt = mod(startingInt)
        return startingInt

  }

}
