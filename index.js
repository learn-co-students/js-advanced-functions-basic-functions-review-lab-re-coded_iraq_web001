// Your code here
function saturdayFun(str="roller-skate"){
  return (`This Saturday, I want to ${str}!`)
}
function mondayWork(lol="go to the office"){
  return (`This Monday, I will ${lol}.`)
}
function wrapAdjective(flair="*"){
  return function inner(txt="special"){
  return (`You are ${flair}${txt}${flair}!`)}
}
let Calculator = {
  add: (x,y) => {
    return x+y
  },
  subtract: (x,y) => {
    return x-y
  },
  multiply: (x,y) => {
    return x*y
  },
  divide: (x,y) => {
    return x/y
  }
}
let array = [
  function(x){return x*2},
  function(x){return x+1000},
  function(x){return x%7}
]
function actionApplyer(num = 0, arr=[]){
for(let i=0;i<arr.length;i++){
  num=arr[i](num)
}
  return (num)
}
actionApplyer(13,array)
