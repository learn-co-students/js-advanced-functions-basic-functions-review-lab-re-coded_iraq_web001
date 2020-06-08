// Your code here
function saturdayFun(activity ="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

saturdayFun("bathe my dog");

function mondayWork(activity ="go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork();




function wrapAdjective(adjective="*"){
  return function(name="special"){
    return `You are ${adjective}${name}${adjective}!` 
  }
}
wrapAdjective("*")("hard worker")

let Calculator = {
add: function(a,b){
  return a + b
},
subtract: function(a,b){
  return a - b
},
multiply: function(a,b){
 return a * b
},
divide: function(a,b){
  return a / b
}

}

arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
function actionApplyer(a,array){
  for (let i=0;i<array.length;i++){
   a = array[i](a)
  }
  return a
}

actionApplyer(13,arrayOfTransforms)
