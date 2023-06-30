/**
 * 배열(Array)
 * - 복수의 데이터를 순서대로 담고 있는 자료구조
 * - 배열의 순서는 0부터 시작
 * - 배열은 객체!
 * - 키 => 인덱스, 값 => 요소
 */

// var mbti = ["INFP", "ENFJ", "INTJ"];
// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = "ESFP";
// console.log(mbti[3]);
// console.log(mbti.length);

// mbti[2] = "ISTJ";
// console.log(mbti[2]);

// push() : 배열의 뒤쪽에 추가
// console.log(mbti.push("ESFP", "ISTJ"));

// 스프레드 문법
// var newMbti = [...mbti, 'ESFP', 'ISTJ'];
// console.log(mbti);
// console.log(newMbti);

var mbti = ["INFP", "ENFJ", "INTJ"];
// pop()
// console.log(mbti.pop());
// console.log(mbti);

// unshift() : 배열의 앞쪽에 추가
console.log(mbti.unshift("ESFP", "ISTJ"));

// 스프레드 문법
var newMbti = ["ESFP", "ISTJ", ...mbti];
console.log(mbti);
console.log(newMbti);

//shift : 배열의 앞쪽 요소 반환 후 삭제
console.log(mbti.shift());
console.log(mbti);

//slice()
console.log(mbti.slice(0, 2)); // 처음부터 1(=2-1)까지 반환
console.log(mbti.slice()); // 처음부터 끝까지 반환
console.log(mbti.slice(-1)); // 끝부터 거꾸로 반환

//join()
console.log(mbti.join());
console.log(mbti.join("-"));
console.log(mbti.join("|"));
console.log(mbti.join(""));

//sort() : 정렬
console.log(mbti.sort());

//reverse()
console.log(mbti.sort().reverse());
