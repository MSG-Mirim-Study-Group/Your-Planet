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
    window.location.href = "https://example.com";
    break;
  case "infj":
    window.location.href = "https://example.com";
    break;
  case "intj":
    window.location.href = "https://example.com";
    break;
  case "intp":
    window.location.href = "https://example.com";
    break;
  case "isfp":
    window.location.href = "https://example.com";
    break;
  case "isfj":
    window.location.href = "https://example.com";
    break;
  case "istp":
    window.location.href = "https://example.com";
    break;
  case "istj":
    window.location.href = "https://example.com";
    break;
  case "enfp":
    window.location.href = "https://example.com";
    break;
  case "enfj":
    window.location.href = "https://example.com";
    break;
  case "entj":
    window.location.href = "https://example.com";
    break;
  case "entp":
    window.location.href = "https://example.com";
    break;
  case "esfj":
    window.location.href = "https://example.com";
    break;
  case "estj":
    window.location.href = "https://example.com";
    break;
  case "esfp":
    window.location.href = "https://example.com";
    break;
  case "esfj":
    window.location.href = "https://example.com";
    break;
}
