// 반복문(loop)

// 1. for문

for (var i = 0; i < 10; i++) {
  console.log(i);
} //i가 0부터 9까지 수행하고 for문 종료

for (var i = 10; i > 0; i--) {
  console.log(i);
}

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    console.log(`${i}-${j}`);
  }
}

// 2. while 문
var flag = 10;

while (flag > 0) {
  console.log(flag);
  flag--;
}

// do...while : 조건과 상관없이 최초에 수행하게 하기 위함

var flag = 10;

do {
  console.log(flag);
  flag--;
} while (flag > 0);
