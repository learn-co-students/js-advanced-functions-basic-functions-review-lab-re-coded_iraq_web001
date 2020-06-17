// Your code here
let Calculator = {
  add:function(x,y)
  {return x+y;},
  subtract: function(x,y)
  {return x-y;},
  multiply: function(x,y)
  {return x*y;},
  divide: function(x,y)
  {return x/y;}
}
function saturdayFun(fun='roller-skate')
{
  return ('This Saturday, I want to '+ fun + '!')
}

function mondayWork(activity=`go to the office`)
{
  return (`This Monday, I will ` + activity +`.`)
}

function  wrapAdjective(flair='*')
{
  return function(adj='special')
  {
    return `You are ${flair}${adj}${flair}!`
  }
}
let encouragingPromptFunction=wrapAdjective("!!!");
encouragingPromptFunction("%")("a dedicated programmer");


function actionApplyer(startInt,arr){
  if (arr.length ===0)
  return startInt
  else
  {
    startInt=arr[0](startInt);
  startInt=arr[1](startInt);
  startInt=arr[2](startInt);
  return startInt
  }
}

