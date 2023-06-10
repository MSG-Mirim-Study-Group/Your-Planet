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

  document.addEventListener("DOMContentLoaded", function() {
    var selectedPlanet = localStorage.getItem("selectedPlanet");
    var planetScene = document.getElementById(selectedPlanet + "Scene");
    if (planetScene) {
      planetScene.style.display = "block";
    }
  });
