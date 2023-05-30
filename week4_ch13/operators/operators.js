/*
* 연산자
- 1개의 표현식에 대해 산술, 대입, 논리, 타입 등을 평가하여 값을 생성하는 작업
*/

// 1. 산술 연산자

var a = 10;
var b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// console.log(a);
// console.log(b);

var c = 7;
// console.log(++c); c에 1더한 후 출력
// console.log(c++); 이 상태의 c는 그대로 7인데 (c출력이 우선순위가 더 높기 때문)
// console.log(c); c++이후에 출력되는 c는 7에 1이 더해져서 8이 됨.
// console.log(c--);
// console.log(c);

// 2. 대입 연산자, 할당 연산자
var d = 2;
// d = 10;
// console.log(d);

// console.log((d += 3)); // d = d + 3
// console.log((d -= 3));
// console.log((d *= 3));
// console.log((d /= 3));
// console.log((d %= 3));

// 3. 비교 연산자
// console.log(2 == 2);
// console.log(2 == "2"); // 암묵적 형 변환
// console.log(2 === "2"); // 암묵적 형 변환이 되지 않은 상태 그대로를 비교 하고 싶을땐 등호를 3개 쓰면 됨

// console.log(2 != 2);
// console.log(2 != "2"); // 암묵적 형 변환
// console.log(2 !== "2");

// console.log(4 > 2);
// console.log(4 < 2);
// console.log(4 >= 2);
// console.log(4 <= 2);

// 4. 논리 연산자 : 거의 나중에 연산이 이루어짐

// 논리합(or)
// 피연산자 중에 하나라도 참이면 참을 반환
// console.log(true || true);
// console.log(true || false || false);
// console.log(false || false);
// console.log(2 > 3 || 5 == 5); //비교 연산자 먼저 연산하고 논리 연산자는 제일 마지막에 연산됨.

// 논리곱(and)
// 피연산자 모두가 참이어야 참

// console.log(true && true);
// console.log(true && false && false);
// console.log(false && false);
// console.log(2 > 3 && 5 == 5);
// console.log(2 < 3 && 5 == 5);

// 부정(not)
// 피연산자의 boolean 값을 부정
// console.log(!true);
// console.log(!false);
// console.log(!(5 > 4));

// 5. typeof 연산자 : type을 반환해줌 (기본형 5개를 제외하면 다 객체(참조형))
console.log(typeof 1); // 기본형
console.log(typeof "1"); // 기본형
console.log(typeof true); // 기본형
console.log(typeof undefined); // 기본형
console.log(typeof Symbol()); // 기본형
console.log(typeof null); // 이것도 기본형이긴 한데 typeof 값은 object(객체)로 나오기 때문에 null값 검증이 필요한 경우에는 typeof보다는 등호 3개(===)를 사용할 것!
