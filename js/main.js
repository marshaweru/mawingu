//Variable with const keyword

const apiKey = "a5fc5fcbec9f6f6e86d9ad33f154e227";
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=singapore";
//We add city by using q = as above
//To input city name inside input box and city name to be displayed in app remove city name from varible above and use checkweather function below
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
//Click on search btn to send city info in checkweather function above
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");//Add dot in class name to update weather icon


//Add async function and name the function
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    //console.log(data);  remove to enable display of results with each new input

    //Update temp, city, humidity and wind information accoirding to data from API. So select these elements from HTML and update data
//Select city element. innerHTML updates text written in element
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";//Round off figure to nearest 1 by adding Math.round(data.main.temp)
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
//Add percentage, degree celcius and kph as above

//Update weather image according to weather condition
if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images\clouds.png";//Update source file
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images\clear.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images\mist.png"
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images\snow.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images\drizzle.png"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images\rain.png"
}
else if(data.weather[0].main == "Wind"){
    weatherIcon.src = "images\wind.png"
}
else if(data.weather[0].main == "Dropdown"){
    weatherIcon.src = "images\dropdown.png"
}
else if(data.weather[0].main == "Humidity"){
    weatherIcon.src = "images\humidity.png"
}
else if(data.weather[0].main == "Play"){
    weatherIcon.src = "images\mist.png"
}
else if(data.weather[0].main == "Search"){
    weatherIcon.src = "images\search.png"
}
//To display results after typing in city name
document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);//SearchBox.value gives city name in input field
})

