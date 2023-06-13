function goToBPage(planet) {
    localStorage.setItem("selectedPlanet", planet);
    location.href="../유저리스트/index.html";
  }