// Your code here

function saturdayFun(task="roller-skate"){
  return `This Saturday, I want to ${task}!`
}

saturdayFun()
                        
let mondayWork=function (task2="go to the office"){
  return `This Monday, I will ${task2}.`
}
mondayWork()

function wrapAdjective(str="*"){
  return function(var1="special"){
       return `You are ${str}${var1}${str}!`
  }
}
let encouragingPromptFunction = wrapAdjective("%")("a dedicated programmer")

const Calculator={
  add:function(a,b){
    return a+b
  },
  subtract:function(a,b){
    return a-b
  },
  multiply:function(a,b){
    return a*b
  },
  divide:function(a,b){
    return a/b 
  }
}

function actionApplyer(x,y){
  if (y===[]){
  return x
  }
  else{
    let res=x
    for(let i=0;i<y.length;i++){
    res=y[i](res)
    }
    return res
  }
}
let arrayOfFunction = [ 
                function(a) { 
                  return a*2 ; 
                }, 
                  
                function(b) { 
                    return b+1000 
                }, 
                  
                function(c) { 
                    return c%7; 
                }      
            ] 

actionApplyer(13,arrayOfFunction)
 




