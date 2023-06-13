// 변수 초기화
let i = 0;
let j = 0;
let s = 0;
let e = 0;
let f = 0;
let n = 0;
let p = 0;
let t = 0;

// 페이지 로드 시 변수 값 복원
window.onload = function () {
  if (localStorage.getItem("i")) {
    i = parseInt(localStorage.getItem("i"));
  }
  if (localStorage.getItem("j")) {
    j = parseInt(localStorage.getItem("j"));
  }
  if (localStorage.getItem("s")) {
    s = parseInt(localStorage.getItem("s"));
  }
  if (localStorage.getItem("e")) {
    e = parseInt(localStorage.getItem("e"));
  }
  if (localStorage.getItem("f")) {
    f = parseInt(localStorage.getItem("f"));
  }
  if (localStorage.getItem("n")) {
    n = parseInt(localStorage.getItem("n"));
  }
  if (localStorage.getItem("p")) {
    p = parseInt(localStorage.getItem("p"));
  }
  if (localStorage.getItem("t")) {
    t = parseInt(localStorage.getItem("t"));
  }
};

