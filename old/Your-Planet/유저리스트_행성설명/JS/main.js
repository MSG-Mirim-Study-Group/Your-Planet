document.addEventListener("DOMContentLoaded", function () {
  var selectedPlanet = localStorage.getItem("selectedPlanet");
  if (selectedPlanet) {
    var planetScene = document.getElementById(selectedPlanet + "Scene");
    if (planetScene) {
      planetScene.style.display = "block";
    }
  }
});

function goToUserPage(planet) {
  localStorage.setItem("selectedPlanet", planet);
  location.href = "../유저리스트_행성설명/index_User.html";
}

function goToPage(planet) {
  localStorage.setItem("selectedPlanet", planet);
  location.href = "../유저리스트_행성설명/index.html";
}

function goBack() {
  var previousPage = sessionStorage.getItem('previousPage');
  if (previousPage) {
    window.location.href = previousPage;
  }
}