
  document.addEventListener("DOMContentLoaded", function() {
    var selectedPlanet = localStorage.getItem("selectedPlanet");
    var planetScene = document.getElementById(selectedPlanet + "Scene");
    if (planetScene) {
      planetScene.style.display = "block";
    }
  });


function goToUserPage(planet) {
   localStorage.setItem("selectedPlanet", planet);
   location.href="../유저리스트_행성설명/index_User.html";
}
function goToPage(planet) {
  localStorage.setItem("selectedPlanet", planet);
  location.href="../유저리스트_행성설명/index.html";
}

function previousPage() {
  var url = document.referrer;
  if (url.includes('A.html')) {
    return 'A.html';
  } else if (url.includes('B.html')) {
    return 'B.html';
  } else {
    return '#';
  }
}

function goBack() {
  history.go(-1);
}