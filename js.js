const loadContries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadContries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
          <h3>${country.name}</h3>
          <p>${country.capital}</p>
          <button onclick="loadCountriesByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
    });

}

const loadCountriesByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}
const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('Country-details');
    countryDiv.innerHTML = `
          <h4>${country.name}</h4>
          <p>population::${country.population}</p>
          <p>region::${country.region}</p>
          <p>nativeName::${country.nativeName}</p>
          <p>capital::${country.capital}</p>
          <p>numericCode::${country.numericCode}</p>
          <img width="200px" src="${country.flag}">
          
        `;


}