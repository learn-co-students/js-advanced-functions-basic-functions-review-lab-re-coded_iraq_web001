// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}


let mondayWork = function(activity = "go to the office"){

  return `This Monday, I will ${activity}.`
}


function wrapAdjective(visualFlair='*'){
  return function (para1='special'){
    return `You are ${visualFlair}${para1}${visualFlair}!`;

  }
}

const Calculator = {
  add:(a,b)=>a+b,
  subtract:(a,b)=>a-b,
  multiply:(a,b)=>a*b,
  divide:(a,b)=>a/b,
}

function actionApplyer(a,b){
  let aa=a;
b.forEach(e=>aa=e(aa));
return aa;
}
