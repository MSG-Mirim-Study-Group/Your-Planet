function userList() {
    $('#userList').show();
    $('#planetExplan').hide();
    console.log("userList");
}
function planetExplan() {
    $('#planetExplan').show();
    $('#userList').hide();
    console.log("planetExplan");
}


function showSection(sectionNumber) {
    // 모든 씬 숨기기
    document.getElementById("scene1").classList.add("hidden");
    document.getElementById("scene2").classList.add("hidden");
    document.getElementById("scene3").classList.add("hidden");

    // 모든 섹션 숨기기
    document.getElementById("section1").classList.add("hidden");
    document.getElementById("section2").classList.add("hidden");
    document.getElementById("section3").classList.add("hidden");

    // 선택한 섹션 보여주기
    document.getElementById("section" + sectionNumber).classList.remove("hidden");
  }

  document.addEventListener("DOMContentLoaded", function() {
    var selectedPlanet = localStorage.getItem("selectedPlanet");
    var planetScene = document.getElementById(selectedPlanet + "Scene");
    if (planetScene) {
      planetScene.style.display = "block";
    }
  });
