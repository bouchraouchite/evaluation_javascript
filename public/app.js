function fetchAndDisplayCountries() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countries = response.data;
        const countryListElement = document.getElementById("country-list");
        countryListElement.innerHTML = "";
  
        countries.forEach((country) => {
          const countryElement = document.createElement("div");
          countryElement.classList.add("country-item");
          countryElement.innerHTML = `
            <img src="${country.flags.svg}" alt="Drapeau de ${country.name.common}">
            <span>${country.name.common}</span>
          `; 
  
          countryElement.addEventListener("click", () =>
            displayCountryDetails(country)
          );
          countryListElement.appendChild(countryElement);
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des pays:", error);
        
      });
  }
  
  function displayCountryDetails(country) {
    const detailsElement = document.getElementById("country-details");
    detailsElement.innerHTML = `
      <img src="${country.flags.svg}" alt="Drapeau de ${country.name.common}">
      <p>Capitale: ${country.capital ? country.capital[0] : "Non disponible"}</p>
      <p>Population: ${country.population.toLocaleString("fr")}</p>
      <p>Région: ${country.region}</p>
      <p>Monnaie: ${
        country.currencies
          ? Object.values(country.currencies)
              .map((currency) => `${currency.name} (${currency.symbol})`)
              .join(", ")
          : "Non disponible"
      }</p>
      <p>Langues: ${
        country.languages
          ? Object.values(country.languages).join(", ")
          : "Non disponible"
      }</p>
      <p>Fuseaux horaires: ${country.timezones.join(", ")}</p>
    `;
  }
  
  fetchAndDisplayCountries();
  