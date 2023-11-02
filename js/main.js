//Variable with const keyword

const apiKey = "a5fc5fcbec9f6f6e86d9ad33f154e227";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=singapore";
//We add city by using q = as above

//Add async function and name the function
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}

checkWeather();

//Update temp, city, humidity and wind information accoirding to data from API. So select these elements from HTML and update data
//Select city element. innerHTML updates text written in element
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp;
document.querySelector(".humidity").innerHTML = data.main.humidity;
document.querySelector(".wind").innerHTML = data.wind.speed;
//Add percentage, degree celcius and kph as above