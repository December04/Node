// JavaScript 기본 문법 정리

// 출력
console.log("JavaScript Programming");

// 변수 선언
var valueVar = 10
let valueLet = 3.14159;
const CONSTVALUE = 100;

// 복합 대입 연산자
let number = 10;
number += 5; 
number -= 5; 
number *= 5; 
number /= 5; 

// 증감 연산자 
number++; 
--number; 

// 자료형 검사 
console.log(typeof number);

// 자료형 변환
console.log(String(123)); 
console.log(Number("10"));
console.log(Boolean(0)); 

// 자동 형변환 (+만 문자열로 변환)
console.log(1 + "2");
console.log("6" * 2);
console.log("6" - 2);

// 일치 연산자 
console.log(5 == "5"); 
console.log(5 === "5");

// 함수 선언
function power(x) {
  return x * x;
}
console.log(power(5)); 

const square = function (n) {
  return n * n;
};
console.log(square(4));

const add = (a, b) => a + b;
console.log(add(2, 3));

function repeat(callback, count) {
  for (let i = 0; i < count; i++) callback(i);
}
repeat((i) => console.log(`${i}번째 호출`), 3);

// 표준 내장 함수 
console.log(parseInt("52.7")); 
console.log(parseFloat("52.7")); 
setTimeout(() => console.log("1초 후 실행"), 1000);

// 객체 
const person = {
  name: "홍길동",
  age: 25,
  greet: function () {
    console.log(`안녕하세요, ${this.name}입니다.`);
  },
};
person.greet();
console.log(person["age"]);

// 반복문 
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

for (let key of person) {
  console.loge(key)
}

// 배열
const fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits);
fruits.sort();
console.log(fruits);

// Number, String, Date 객체
let num = 123.456;
console.log(num.toFixed(2)); // "123.46"

let str = "Hello JavaScript";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.indexOf("Java"));
console.log(str.split(" "));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.toLocaleString());

// 예외 처리 
try {
  let x = y + 10; 
} catch (error) {
  console.log("예외 발생:", error.name, error.message);
} finally {
  console.log("예외 처리 완료");
}

function checkAge(age) {
  if (age < 0) throw new Error("나이는 음수가 될 수 없습니다.");
  console.log("정상적인 나이:", age);
}
try {
  checkAge(-3);
} catch (e) {
  console.log("오류:", e.message);
}
