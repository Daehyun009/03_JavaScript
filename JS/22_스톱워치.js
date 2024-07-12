const display = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// [0]:분 / [1]:초 / [2]:1/100초
const timeList = document.querySelectorAll("#display > span");


let count = 0; // 1/100초 마다 1씩 증가한 값을 저장할 변수

// START 버튼을 눌렀을 때
// 반복되는 setInterval()을 저장할 용도의 변수
let currentInterval; 


// --------------------------------------------------------------
/* START 버튼 클릭시 10ms 마다 count 1 증가 + 화면 시간 변경 */
startBtn.addEventListener("click", () => {


  // 이전에 start 버튼이 클린된적이 있을 경우
  // -> 버튼에 작성 내용이 "PAUSE"인 경우
  if(startBtn.innerText === "PAUSE") {
    clearInterval(currentInterval); // 이전 interval 멈춤
    startBtn.innerText = "START"; // 버튼 내용을 START로 변경

    recordBtn.disabled = true; // 비활성화 해!

    // 일시 정지 상태가 유지되어야 하기 때문에
    // 이벤트 핸들러를 여기서 종료시켜
    // 아래 setInterval()을 수행 못하게함!
    return;
  }

  currentInterval = setInterval(() => {
    count++; // count 1 증가
    output(); // 시계 화면 출력 함수 호출
  }, 10)

  startBtn.innerText = "PAUSE";

  //RECORDE 버튼 비활성화 -> 활성화로 변경
  recordBtn.disabled = false; // 비활성화 하지마! -> 활성화 해!
});

/* 시계 출력 함수 */
function output() {

  // 화면에 출력될 시간을 저장할 변수
  let minute = Math.floor(count / 100 / 60);
  let second = Math.floor(count / 100 % 60);
  let ms = count % 100;

  // 0을 붙이는 함수 호출
  minute = attachZero(minute);
  second = attachZero(second);
  ms = attachZero(ms);


  // 화면 출력

  // minute에 저장된 값과 화면에 출력된 "분"이 다른 경우
  // -> 1분 증가
  if (minute != timeList[0].innerText) {
    timeList[0].innerText = minute;
  }

  // second에 저장된 값과 화면에 출력된 "초"가 다른 경우
  // -> 1초 증가
  if (second != timeList[1].innerText) {
    timeList[1].innerText = second;
  }
  timeList[2].innerText = ms;
}

/** 전달 받은 수가 10 미만인 경우 앞에 "0" 붙여서 반환 */
function attachZero(num) {
  if (num < 10) return "0" + num;
  return num;
}


/* 
    RESET 버튼이 클릭 되었을 때
  - 0.01초 마다 반복되는 setInterval()을 멈춤
  - 화면에 출력된 시간을 00:00.00 으로 초기화
*/
resetBtn.addEventListener("click", ()=>{

  /* [window.]clearInterval( setInterval()이 저장된 변수)
    - 전달인자에 작성된 setInterval()을 멈춤(지움)
  */

  clearInterval(currentInterval);
  
  count = 0;
  output();
  startBtn.innerText = "START"; // 버튼 내용을 "START"로 변경

// 기록된 시간들 모두 삭제
recordContainer.innerHTML = '';

recordBtn.disabled = true; // 비활성화 해!
})


// ---------------------------------------------------

/* RECORD 버튼 클릭 시
  현재 출력되는 시간을 얻어와
  li태그로 만들어 #recordContainer의 첫 번째 자식으로 추가
*/

recordBtn.addEventListener("click", () => {

  // #display에 작성된 내용 얻어오기

  // innerHTML : HTML 문서에 작성된 내용 그대로 얻어옴
  // console.log( display.innerHTML );

  // innerText : 태그, 주석 무시하고 Text(내용)만 얻어옴
  // console.log( display.innerText );

  // innertextContent : Text를 얻어오는데 공백 문자도 포함
  // console.log( display.textContent );

  /* li 태그 생성 */
  const li = document.createElement("li");

  // 내용으로 현재 출력 시간 대입
  li.innerText = display.innerText;

  // #recordContainer의 첫 번째 자식으로 추가
  recordContainer.prepend(li);
});