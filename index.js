// Your code here
function saturdayFun (thing='roller-skate'){
    return `This Saturday, I want to ${thing}!`
}

let mondayWork =function (work = "go to the office"){
    return `This Monday, I will ${work}.`
}
mondayWork();


 let wrapAdjective =  function (flair =`*`){


    return function(any =" special") {
        return `You are ${flair}${any}${flair}!`
    }

}

let Calculator = {
};

Calculator.add = function(n1=1, n2=3){
    return n1 + n2
}
Calculator.subtract = function(n1 = 1, n2 =3){
    return n1 - n2
}
Calculator.multiply = function(n1 = 1 , n2 = 3){
    return n1 * n2
}
Calculator.divide = function(n1= 10, n2 = 5){
    return n1 / n2
}

function actionApplyer (num, arr){
    if (arr.length === 0){
        return num;
    }else {

        return (((num * 2) + 1000) % 7) ;
    }
    


}
