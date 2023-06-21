function goToBPage(planet) {
  localStorage.setItem("selectedPlanet", planet);
  sessionStorage.setItem('previousPage', '/all_planet/');
  location.href = "/userlist_explain/index.html";
}
