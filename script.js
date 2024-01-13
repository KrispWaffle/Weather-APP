const apiKey = "cf67cef5a6f3d24d8be3fbbd4953cd18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector("#message").innerHTML = data.main.temp + "°" ;
}

const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const cityC = checkWeather(userInput.value);
});