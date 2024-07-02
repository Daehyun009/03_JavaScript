/* .js 파일 내부를 <script> 태그 내부라고 생각 */

// 함수 선언(기능 만들거야)
function externalFn() {

  // 함수 정의(기능이 이렇게 동작할거야)

  alert("External 확인 버튼이 클릭됨");
  alert("이번에 alert 두번");
}

// -----------------------------------------------
// JS 맛보기
// - 버튼 클릭 시 body 태그의 글자색 배경색을 변경

// HTML 문서에서 body 태그 선택
const body = document.querySelector("body");


// 라이트모드 변경 함수(기능) 선언
function lightMode() {
  // 함수 정의
  body.style.color = "black"; // body 태그의 글자색을 black으로 설정
  body.style.backgroundColor = "white"; // body 태그의 배경색을 white로 설정
}

// 다크모드 변경 함수(기능) 선언
function darkMode() {
  body.style.color = "white"; // 글자색 white
  body.style.backgroundColor = "black"; // 배경색 black

}
