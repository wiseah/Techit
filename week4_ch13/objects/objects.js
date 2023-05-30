/*
객체(Object)
- 속성의 모음으로 이루어진 데이터
- 속성에는 어떤 데이터 타입이라도 할당 가능
- 속성의 구분은 ,(콤마)로!
- 속성의 정의는 속성명(키):속성값
*자바스크립트의 대부분은 객체
*/

var student = {
  grade: 1,
  school: "lion school",
};

// 객체의 값 호출
var gradeInfo = student.grade;
console.log(gradeInfo);

// 객체의 키 호출
var key = Object.keys(student)[0];
console.log(key);

// 객체에 속성(데이터) 추가
student.class = 3;
console.log(student);

// 아래 두 개는 속성값을 부르는 두 가지 방법
console.log(student["class"]);
console.log(student.class);

// 비어 있는 객체 (만드는 두 가지 방법)
var teacher = new Object();
var teacher = {
  //객체 자체의 내용은 리터럴이라 함.
};
