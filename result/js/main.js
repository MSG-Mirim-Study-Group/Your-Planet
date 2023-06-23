function goToPage(planet) {
  localStorage.setItem("selectedPlanet", planet);
  switch(planet) {
    case "Sun":
      location.href="../result/sun.html";
      break;
    case "Mercury":
      location.href="../result/mercury.html";
      break;
    case "Venus":
      location.href="../result/venus.html";
      break;
    case "Earth":
      location.href="../result/earth.html";
      break;
    case "Moon":
      location.href="../result/moon.html";
      break;
    case "Mars":
      location.href="../result/mars.html";
      break;
    case "Saturn":
      location.href="../result/saturn.html";
      break;
    case "Jupiter":
      location.href="../result/jupiter.html";
      break;
    case "Uranus":
      location.href="../result/uranus.html";
      break;
    case "Neptune":
      location.href="../result/neptune.html";
      break;
    case "BlackHole":
      location.href="../result/blackhole.html";
      break;
    case "Pluto":
      location.href="../result/pluto.html";
      break;
  }
}

function clickBtn(btn) {
  switch(btn) {
    case "planets_btn":
      location.href="../all_planet/index.html";
      break;
    case "restart_btn":
      location.href="/";
      break;
  }
}