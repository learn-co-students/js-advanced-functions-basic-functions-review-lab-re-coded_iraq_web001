// Your code here
// Your code here
function saturdayFun(todo = 'roller-skate') {
  return `This Saturday, I want to ${todo}!`;
}

function mondayWork(todo = 'go to the office') {
  return `This Monday, I will ${todo}.`;
}

function wrapAdjective(adjective = '*') {
  return function (a = 'special') {
    return `You are ${adjective}${a}${adjective}!`;
  };
}

console.log(wrapAdjective('*')('a dedicated programmer'));

const Calculator = {
  add: () => {
    return 1 + 3;
  },
  subtract: () => {
    return 1 - 3;
  },
  multiply: () => {
    return 1 * 3;
  },
  divide: () => {
    return 10 / 5;
  },
};

function actionApplyer(startInt, arrayOfFun) {
  if (arrayOfFun.length == 0) {
    return startInt;
  }
  arrayOfFun.forEach(fn => {
    startInt = fn(startInt);
  });
  return startInt;
}

arrayOfTransforms = [
  function (a) {
    return a * 2;
  },
  function (a) {
    return a + 1000;
  },
  function (a) {
    return a % 7;
  },
];
// console.log(actionApplyer(13, arrayOfTransforms));

// function outer(greeting, msg = 'its a fine day to learn ') {
//   let innerFunction = (name, lang = 'python') => {
//     return `${greeting}, ${name}! ${msg} ${lang}`;
//   };

//   return innerFunction;
// }

// console.log(outer('how are u')('mike', 'javaScript'));

// function demoChain(name) {
//   let part1 = 'hi';
//   return function () {
//     let part2 = 'there';
//     return function () {
//       // Innermost
//       console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//     };
//   };
// }

// console.log(demoChain('Dr. Stephen Strange')()());
