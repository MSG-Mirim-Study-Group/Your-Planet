function goToBPage(planet) {
  localStorage.setItem("selectedPlanet", planet);
  sessionStorage.setItem('previousPage', '../전체행성/index.html');
  location.href = "../유저리스트_행성설명/index.html";
}