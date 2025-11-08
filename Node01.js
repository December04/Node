// Node.js (크롬 V8 엔진 기반의 자바스크립트 런타임)  

// 이벤트 기반 비동기 처리 
function fA(){ console.log('Func. A') }
function fB(){ setTimeout(() => console.log('Func. B'), 3000) }
function fC(){ console.log('Func. C') }
fA(); fB(); fC(); 
// 실행 순서: A → C → B

// 콜백 함수
function fB(callback){
  setTimeout(() => {
    console.log('Func. B');
    callback();
  }, 3000);
}
fA(); fB(fC); 
// 실행 순서: A → B → C

// 파일 읽기
const fs = require('fs');
console.log('1');
let data = fs.readFileSync('./test.txt', 'utf8');
console.log(data);
console.log('3');

console.log('1');
fs.readFile('./test.txt', 'utf8', (err, result) => {
  if (err) console.error(err);
  else console.log(result);
});
console.log('3');

console.log('Start Read');
fs.readFile('txt/readTest.txt', (err, data) => console.log(data.toString()));
fs.readFile('txt/readTest1.txt', (err, data) => console.log(data.toString()));
fs.readFile('txt/readTest2.txt', (err, data) => console.log(data.toString()));
console.log('End Read');

// Promise
const promise = new Promise((resolve, reject) => {
  try {
    resolve('Success');
  } catch {
    reject('Fail');
  }
});
promise
  .then((result) => console.log('Result:', result))
  .catch((err) => console.error('Error:', err));

function promise1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Success P1'), 1000);
  });
}
function promise2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Success P2'), 1000);
  });
}
promise1()
  .then((result) => {
    console.log(result);
    return promise2();
  })
  .then((result) => console.log(result));

// async/await
async function asyncExample() {
  try {
    const result1 = await promise1();
    console.log(result1);
    const result2 = await promise2();
    console.log(result2);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    console.log('END');
  }
}
asyncExample();
