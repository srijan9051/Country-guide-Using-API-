let searchbtn=document.getElementById("search-btn");
let countryinp = document.getElementById("country-inp");

searchbtn.addEventListener("click",()=>{
    let countryname= countryinp.value;
    let finalurl = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`;
    // console.log(finalurl);
    fetch(finalurl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
        <img src="${data[0].flags.svg}"
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>
        <button onclick="reset()" id="reset-btn">Reset</button>
        `
    });
});
function reset(){
    window.location.reload();
}