// Your code here
function saturdayFun(activity="roller-skate") {
return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun('cook');
function mondayWork(activity="go to the office") {
return(`This Monday, I will ${activity}.`);
}
mondayWork();
mondayWork('do the writing');
function wrapAdjective(character="*") {
return function(adj="special"){
  return(`You are ${character}${adj}${character}!`)
}
}
wrapAdjective("%")("a dedicated programmer");

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

function actionApplyer(int=0,array) {
if(array.length===0)
{return (int)}
else {
  let [multiply,add,mod]=array;
   int = multiply(int);
   int = add(int);
   int = mod(int);
   return int;
}
}
