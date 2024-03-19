const apiKey = "cf67cef5a6f3d24d8be3fbbd4953cd18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const background = document.querySelector('background-image');
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector("#message").innerHTML = data.main.temp + "°" ;
   // document.querySelector("#weatherType").innerHTML = data.weather[0].main;
    if (data.weather[0].main == "Clouds" ){
     
   
        const body = document.querySelector('body');


        body.style.backgroundImage = 'url("https://imgs.search.brave.com/EfW7sY65bF-eXcr5_Z__OcWDXSpuv223mtPzXPiiXcs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/Mzg4MzI5MS9waG90/by9zdG9ybXktY2xv/dWR5LXNraWVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1C/NEp0cXI5TmZ3X010/bktobzRBbnJXZ3Ix/MmNSSkNfUTR5U3Jw/bVRNaW5vPQ")';

    }else if(data.weather[0].main == "Rain"){
        const body = document.querySelector('body');
        body.style.backgroundImage = 'url("https://imgs.search.brave.com/8cLSllB2v2a7WdcpSm0M1-IXNTT1Fk6xLLEFrnbAC28/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MzExMDQ5My9waG90/by9zdG9ybXktY2xv/dWRzLWFuZC10b3Jy/ZW50aWFsLXJhaW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUVIM3pEeExBMVo4/MDZDR3lEZ0IxOWFN/REhpakxhNHp2dTY0/cWtnUU53LXc9")';


    }else if(data.weather[0].main == "Clear"){
        const body = document.querySelector('body');
        body.style.backgroundImage = 'url("https://imgs.search.brave.com/GErn7D7N3NwgWxoB7q6R0pDVXGCoKiVkXJUadK9LXhQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/MTAzODY0L3Bob3Rv/L2Nsb3Vkcy1vbi1z/a3kuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTNKR0kxM0I4/eHdaSU9iTHRsOElO/MVZGdFBFckh2MnBL/aVdWMHRUdWVtc0k9")';

    }


}

const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const cityC = checkWeather(userInput.value);
    
});

