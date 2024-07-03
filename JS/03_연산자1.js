/* (중요!!!)
  HTML에서 얻어온 값/내용은
  무조건 string 형태!!!!!!
*/

// document : HTML 문서
// . (점 연산자) : 내부, 하위 접근 연산자
// get : 얻다
// Element : HTML 요소
// ById : id가 일치하는

// input1 id를 가지는 요소를 얻어와
// number1 변수(상수)에 저장
const number1 = document.getElementById('input1');

const number2 = document.getElementById('input2');

//결과 출력용 요소 얻어오기
const calcResult = document.getElementById("calcResult");

/**
 * 더하기 함수
*/
function plusFn() {

  // 더하기 함수 정의

  // 입력 값을 숫자(number)로 변환해서 v1 변수에 저장
  const v1 = Number(number1.value)
  const v2 = Number(number2.value)

  console.log("두 수의 합 : ", v1 + v2)

  // v1 + v2 결과 값을
  // calcResult 요소의 내용(innerText)로 대입(=)
  calcResult.innerText = v1 + v2;
}

/** 빼기 함수 */
function minusFn() {

  // Number('숫자만 작성된 문자열') -> 숫자(number)로 변환
  const v1 = Number(number1.value)
  const v2 = Number(number2.value)

  // id가 calcResult인 요소의 내부 내용으로 
  // v1-v2 결과 대입
  calcResult.innerText = v1 - v2;
}

/** 곱하기 함수 */
function multiFn() {
  const v1 = Number(number1.value)
  const v2 = Number(number2.value)

  calcResult.innerText = v1 * v2;

}

/** 나누기 함수 */
function divFn() {
  const v1 = Number(number1.value)
  const v2 = Number(number2.value)

  calcResult.innerText = v1 / v2;
}

/** 나머지 함수 */
function modFn() {
  const v1 = Number(number1.value)
  const v2 = Number(number2.value)

  calcResult.innerText = v1 % v2;
}


//------------------------------------------------------
/* 산술 연산 응용 */
const num1 = document.getElementById('in1'); // 1번 input

const num2 = document.getElementById('in2'); // 2번 input

const calcResult2 = document.getElementById("calcResult2"); // 결과

function firstFn() {
  const v1 = Number(num1.value)
  calcResult2.innerText = v1 * 2;
}

function secondFn() {
  const v2 = Number(num2.value)
  calcResult2.innerText = v2 * v2;
}


/* 
  숫자 + 숫자 = 숫자
  문자 + 문자 = 이어쓰기
  숫자 + 문자 = 이어쓰기

  숫자, 문자 혼용된 산술 연산식에서
  사칙 연산 우선순위를 따른다!!

  - 1순위 : *, /, %
  - 2순위 : +, -

  요소.innerText = "결과<br>100"
  -> 화면에 "결과<br>100" 그대로 출력
  
  요소.innerHTML = "결과<br>100"
  -> 결과
     100
     형태로 출력됨
*/

/** 전체 산술 연산 결과 출력 */
function allFn() {
  const v1 = Number(num1.value) // 첫 번째 값
  const v2 = Number(num2.value) // 두 번째 값

  // 각각의 연산 결과를 별도의 변수에 저장
  const plus = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div = v1 / v2;
  const mod = v1 % v2;

  // 태그가 포함된 결과 문자열 만들기
  const result = 
    "<ul>"
    + "<li>+ 결과 : " + plus + "</li>"
    + "<li>- 결과 : " + minus + "</li>"
    + "<li>* 결과 : " + multi + "</li>"
    + "<li>/ 결과 : " + div + "</li>"
    + "<li>% 결과 : " + mod + "</li>"
    + "</ul>";
    
    // 태그가 포함된 문자열을
    // id가 calcResult2인 요소에
    // 태그가 해석되는 형태(innerHTML)로 대입
  calcResult2.innerHTML = result;
}



//-----------------------------------------

// 1씩 증가/감소한 결과를 출력할 요소 얻어오기
const result = document.getElementById("result");

// 0을 기준으로 증가, 감소할 값을 저장할 변수
let count = 0;

/** 1씩 감소하는 함수 (decrease : 감소하다) */ 
function decrease() {
  count--; // 또는 --count;   -> count 변수 값을 1 감소
           // count = count - 1;

  // 감소한 값을 id가 result인 요소의 내용(innerText)로 대입
  result.innerText = count;
}

/** 1씩 증가하는 함수 (increase : 증가하다) */ 
function increase() {
  count++; // 또는 ++count;   -> count 변수 값을 1 증가
           // count = count + 1;

  // 증가한 값을 id가 result인 요소의 내용(innerText)로 대입
  result.innerText = count;
}

/* 전위/후위 연산 확인하기 */
function checkFn() {

  // 컴퓨터한테 연산은
  // +-*/ 같은 연산 기호를 해석하는 것 뿐만이 아니라
  // 코드/값을 읽고, 실행하는 것도 연산이다!

  // 전위 연산(++변수명, --변수명)
  // 다른 어떤 연산보다도 우선 실행

  let num = 100;
  console.log("++num :", ++num); // 101
  console.log("++num :", ++num); // 102
  console.log("++num :", ++num); // 103

  console.log("--------------");

  console.log("--num : ", --num); // 102
  console.log("--num : ", --num); // 101
  console.log("--num : ", --num); // 100

  console.log("num : ", num); // num == 100


  console.log("===============");

  // 후위 연산(++변수명, --변수명)
  // 다른 어떤 연산보다도 나중에 실행(마지막에 실행)

  num = 100;

  console.log("num++ : ", num++); // 100 출력 -> num 1 증가(101)
  console.log("현재 num : ", num); // 101

  console.log("num++ : ", num++); // 101 출력 -> num 1 증가(102)
  console.log("num++ : ", num++); // 102 출력 -> num 1 증가(103)

  console.log("---------------");
  
  console.log("num-- : ", num--); // 103 출력 -> num 1 감소(102)
  console.log("num-- : ", num--); // 102 출력 -> num 1 감소(101)
  console.log("num-- : ", num--); // 101 출력 -> num 1 감소(100)

  console.log("현재 num : ", num); // 100

  // 증감 연산자 문제
  let a = 10;
  let b = 5;
  let c = ++a * b--;

    // 최종 a,b,c 값은?
  // a : 11
  // b : 4
  // c : 55
  console.log(a, b, c);
}