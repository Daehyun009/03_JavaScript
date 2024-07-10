
const result = document.querySelector(".container-1")


function apply() {

  // 너비
  const width = document.querySelector("#width");
  const widnum = Number(width.value);
  result.style.width = widnum+"px";

  // 높이
  const height = document.querySelector("#height");
  const heinum = Number(height.value);
  result.style.height = heinum+"px";

  // 글자 크기
  const fSize = document.querySelector("#f-size");
  const fontSize = Number(fSize.value);
  result.style.fontSize = fontSize+"px";

  // 굵기
  const check1 = document.querySelector("[name = bold]:checked");
  let weight;
  if (check1 === null) weight = 1;
  else weight = check1.value;
  result.style.fontWeight = weight;

  // 글자색
  const color = document.querySelector("#color");
  result.style.color = color.value;

  // 배경색
  const backgroundColor = document.querySelector("#backgroundColor");
  result.style.backgroundColor = backgroundColor.value;

  // 가로정렬
  const check2 = document.querySelector("[name = row]:checked");
  let row;
  if (check2 === null) row = 1;
  else row = check2.value;
  result.style.justifyContent = row;

  // 세로 정렬
  const check3 = document.querySelector("[name = col]:checked");
  let col;
  if (check3 === null) row = 1;
  else col = check3.value;
  result.style.alignItems = col;

  // 출력 문자열
  const input = document.querySelector("#input");
  result.innerText = input.value;
};