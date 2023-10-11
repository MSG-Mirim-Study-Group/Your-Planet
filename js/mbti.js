var i = localStorage.getItem("i");
var e = localStorage.getItem("e");
var s = localStorage.getItem("s");
var n = localStorage.getItem("n");
var f = localStorage.getItem("f");
var t = localStorage.getItem("t");
var p = localStorage.getItem("p");
var j = localStorage.getItem("j");

let mbti = "";

if (i > e) {
  mbti += "i";
} else {
  mbti += "e";
}

if (s > n) {
  mbti += "s";
} else {
  mbti += "n";
}

if (f > t) {
  mbti += "f";
} else {
  mbti += "t";
}

if (p > j) {
  mbti += "p";
} else {
  mbti += "j";
}

console.log("결과 : " + mbti);


switch (mbti) {
  case "infp":
    window.location.href = "../result/earth.html";
    break;
  case "infj":
    window.location.href = "../result/earth.html";
    break;
  case "intj":
    window.location.href = "../result/pluto.html";
    break;
  case "intp":
    window.location.href = "../result/neptune.html";
    break;
  case "isfp":
    window.location.href = "../result/moon.html";
    break;
  case "isfj":
    window.location.href = "../result/saturn.html";
    break;
  case "istp":
    window.location.href = "../result/mercury.html";
    break;
  case "istj":
    window.location.href = "../result/uranus.html";
    break;
  case "enfp":
    window.location.href = "../result/mars.html";
    break;
  case "enfj":
    window.location.href = "../result/sun.html";
    break;
  case "entj":
    window.location.href = "../result/sun.html";
    break;
  case "entp":
    window.location.href = "../result/blackhall.html";
    break;
  case "esfj":
    window.location.href = "../result/jupiter.html";
    break;
  case "estj":
    window.location.href = "../result/jupiter.html";
    break;
    case "esfj":
      window.location.href = "../result/jupiter.html";
      break;
  case "esfp":
    window.location.href = "../result/venus.html";
    break;
}
