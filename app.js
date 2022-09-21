const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const mainEl =document.getElementById('main');
const formEl = document.getElementById('form');
const searchEl =document.getElementById('search');




const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWeatherByLocation(city){
    const resp = await fetch(url(city));
    const data = await resp.json()
    console.log(data)

    addWeatherToPage(data)
}    




function addWeatherToPage(data){
    const temp =kto(data.main.temp)


    const weather = document.createElement('div');
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2><img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/> ${temp}°C</h2>
        <small>${data.weather[0].main}</small>

    

    `
    mainEl.innerText = ""
    mainEl.appendChild(weather)

}






function kto(K){
    return Math.floor(K - 273.15)
}

formEl.addEventListener("submit",(e)=>{
    e.preventDefault()

    const city = searchEl.value;
    if(city){
        getWeatherByLocation(city)
    }
    
})