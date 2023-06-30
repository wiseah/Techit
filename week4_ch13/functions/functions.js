/**
 * 함수(functions)
 * - 작업의 묶음
 * -코드를 반복해서 작성하는 비효율 줄임
 */

// function mutiply(a, b) {
//   return a * b;
// }

// console.log(mutiply(10, 5));

// var result = mutiply(435, 24);
// console.log(result);

// var mutiply = function (a, b) {
//     return a * b;
// }
// console.log(mutiply(10, 5));

/**
 * 변수 키워드 - var, let, const
 */
var a = 10;

while (true) {
  var a = 1000;
  break;
}

console.log(a);

// 호이스팅

// console.log(word);

// word = 'happy';

// console.log(word);

// var word;

//let
// let word;

// console.log(word);

// word = 'happy';

// console.log(word);

// let a = 10;

// while (true) {
//   var a = 1000;
//   break;
// }

// console.log(a);

//const : 데이터가 변하지 않아야 할 때 사용

const b = 2;

console.log(b);

b = 3;

//const로 선언된 변수에 할당된 객체 (객체는 속성 변경 가능, but 변수는 추가나 변경 불가)
const student = {
  grade: 1,
  class: 3,
};

student.grade = 2; //가능

student = {
  num: 2023,
  grade: 2,
}; // 불가

console.log(student);

// 화살표 함수

// let plus = (a, b) => {
//     return a+ b;
// };

// let plus = (a, b) => a + b;

// console.log(plus(2, 3));

let print = (word) => {
  console.log(word);
};

print("Hello!"); // Hello!가 word에 해당되는 것임.

let myfunc = () => {
  return 1;
};

console.log(myfunc());
