function goToBPage(planet) {
    localStorage.setItem("selectedPlanet", planet);
    location.href="../유저리스트_행성설명/index.html";
  }