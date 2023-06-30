// 문자열 선언
var greeting = "Hello!";
var farewell = "Bye!";
var myname = "김테킷";

//var sentence = greeting + '\n' +myname;
//console.log(sentence);

// 이스케이프 시퀀스
//var sentence = greeting + '\n' +myname;
//var sentence = greeting + '\'' +myname;
//var sentence = greeting + '\t' +myname;
//var sentence = greeting + '\"' +myname;
var sentence = greeting + "\\" + myname;
//console.log(sentence);

// 템플릿 리터럴(ES6)
// = 멀티라인 텍스트 작업 가능, 이스케이프 시퀀스 필요 X
var a = `안녕하세요!
여려분:)`; //백틱(~ 밑에 있는 것)
console.log(a);
var price = 1000;
var b = "이 물건은" + price + "원 입니다.";
console.log(b);

var c = `이 물건은 ${price}원 입니다.`;
console.log(c);

var d = `이 물건은 ${200 + 450}원 입니다.`;
console.log(d);

// 문자열 함수
var abc = "I am Iron man";

// indexOf() : 문자열의 특정 값이 시작되는 위치 반환
console.log(abc.indexOf("man"));
console.log(abc.indexOf("I"));

// slice() : 분자열의 일부를 잘라낼 때
console.log(abc.slice(0, 3));
console.log(abc.slice(0, 4));
console.log(abc.slice(0, 5));

//toUpperCase(), toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startsWith(), endsWith() : 특정 문자열로 시작/끝나는지
var efg = "This is my car.";
console.log(efg.startsWith("Th"));
console.log(efg.startsWith("th")); //대소문자 구분하여 알려줌(대소문자 다르면 다르게 취급)
console.log(efg.endsWith("car."));

//includes()
console.log(efg.includes("is"));
