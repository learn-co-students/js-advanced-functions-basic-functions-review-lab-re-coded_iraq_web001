// Your code here

function saturdayFun(MyActivity = "roller-skate"){
  return `This Saturday, I want to ${MyActivity}!`
}
saturdayFun()
saturdayFun('I want to bathe my dog')

let mondayWork = function (MyActivity1 = "go to the office") {
  return `This Monday, I will ${MyActivity1}.`
}

mondayWork('Play basketball with friend');

function wrapAdjective(mySymbol = "*"){
  return function(mySpecial = "special"){
    return `You are ${mySymbol}${mySpecial}${mySymbol}!`
  }
}

wrapAdjective("%")("good");


let Calculator = {
  name:'salih',
  age :0,
  add(num1,num2){
   return this.age= num1 + num2
 },

 subtract(num1,num2){
   return this.age= num1 - num2
 },
 multiply(num1,num2){
   return this.age= num1 * num2
 },
 divide(num1,num2){
   return this.age= num1 / num2
 },

}
Calculator.add(1,3);
Calculator.subtract(1,3);
Calculator.multiply(1*3);
Calculator.divide(10,5);

function actionApplyer(integer1,arr){
  if(arr ==""){
    return integer1
}
else{
    arr.forEach((numk1,index) =>{

       //console.log(numk1(integer1))
        //console.log(integer1)
        integer1 =  numk1(integer1)
        return integer1


    })
return integer1

}
}
actionApplyer(3,[])
actionApplyer(13,[
  function(integer1){return integer1*2},
  function(integer1){return integer1+1000},
  function(integer1){return integer1  % 7}

])
