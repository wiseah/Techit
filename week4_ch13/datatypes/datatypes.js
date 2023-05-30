/*
자료형

1. 기본형(단순형, 원시형)

- number
- string
- boolean
- undefined
- null
- symbol

2. 참조형, 객체(Object


*/

// number
// 자바스크립트는 정수(integer), 실수 구분이 없음
var price = 10000;
console.log(price);

// string
var myname = "테킷";
console.log(myname);
var myname2 = "멋사";
console.log(myname2);
// var myname3 = "멋쟁이';
var myname4 = "'멋쟁이'";
console.log(myname4);
// var myname5 = "\"사자\""; ""자체를 문자로 사용하고 싶을 때는 큰 따옴표 앞에 \(역슬래쉬)를 넣어주거나 작은따옴표로 큰 따옴표를 감싸면 됨.
var myname5 = '"사자"';
console.log(myname5);

//boolean *true, false값은 모두 소문자로 줘야 함.
var isTrue = true;
console.log(isTrue);
var isFalse = false;
console.log(isFalse);

// undefined: 변수 선언은 했지만, 변수에 어떠한 값도 할당 되지않음을 뜻함
var a;
console.log(a);

// 자바스크립트는 처음에 변수를 정의할 때 데이터 타입을 지정하지 않고, 데이터가 초기화되거나 할당될 때 데이터 타입이 정의된다는 것이 특징.
