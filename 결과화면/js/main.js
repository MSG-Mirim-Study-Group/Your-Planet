function goToPage(planet) {
  localStorage.setItem("selectedPlanet", planet);
  switch(planet) {
    case "Sun":
      location.href="../결과화면/sun.html";
      break;
    case "Mercury":
      location.href="../결과화면/mercury.html";
      break;
    case "Venus":
      location.href="../결과화면/venus.html";
      break;
    case "Earth":
      location.href="../결과화면/earth.html";
      break;
    case "Moon":
      location.href="../결과화면/moon.html";
      break;
    case "Mars":
      location.href="../결과화면/mars.html";
      break;
    case "Saturn":
      location.href="../결과화면/saturn.html";
      break;
    case "Jupiter":
      location.href="../결과화면/jupiter.html";
      break;
    case "Uranus":
      location.href="../결과화면/uranus.html";
      break;
    case "Neptune":
      location.href="../결과화면/neptune.html";
      break;
    case "BlackHall":
      location.href="../결과화면/blackhall.html";
      break;
    case "Pluto":
      location.href="../결과화면/pluto.html";
      break;
  }
}

function clickBtn(btn) {
  switch(btn) {
    case "planets_btn":
      location.href="../전체행성/index.html";
      break;
    case "restart_btn":
      location.href="../첫화면/index.html";
      break;
  }
}