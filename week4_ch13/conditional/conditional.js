/**
 * 제어문(control flow)
 * 1. 조건문
 * 2. 반복문
 */

var a = 0;

// 1. if...else
if (a > 2) {
  console.log("a > 2");
} else {
  console.log("a <= 2");
}

// 2. if...else if...else (조건이 복수개를 만족하면 맨 처음 조건만 만족)

if (a > 2) {
  console.log("a > 2");
} else if (a == 2) {
  console.log("a = 2");
} else if (a == 0) {
  console.log("a = 0");
} else if (a < 2) {
  console.log("a < 2");
}

// 3. switch
var mbti = "INFP";
switch (mbti) {
  case "INFP":
  case "ENFP":
  case "ISTJ":
  default: //매칭되는게 없을 때 실행될 문장
}
