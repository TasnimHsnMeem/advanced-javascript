const number = [3, 4, 5, 6, 7, 8, 9];
// const output = [];

// for (let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

// const result = number.map(function(element){
//     return element * element;
// })
// const result = number.map( x => x * x);
// console.log(result);
//  const bigger = number.filter( x => x>5);
//  console.log(bigger);
 

const isThere = number.find( x => x>5);
console.log(isThere);