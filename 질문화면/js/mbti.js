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
