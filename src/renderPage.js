import { buttonListeners } from "./buttons";
import { currentCondition } from "./weatherFunctions";

export function switches(){
    const switchContainer = document.getElementById("switches")
    const darkMode = document.createElement("button");
    darkMode.textContent="dark";
    darkMode.id = "darkMode"

    const degrees = document.createElement("button");
    degrees.textContent="celcius";
    degrees.id = "degrees"
    switchContainer.appendChild(degrees)

    switchContainer.appendChild(darkMode)
    addEventListeners();


}

function addEventListeners(){
    const darkMode = document.getElementById("darkMode");
    darkMode.addEventListener('click',(e)=>{
        console.log("dark mode clicked")
    })

    const degrees = document.getElementById("degrees");
    degrees.addEventListener('click',(e)=>{
        console.log("degrees clicked")
    })
}

export function searchBar(){
    let searchBar = document.getElementById("searchBar");
    let form = document.createElement("form");
    let input = document.createElement("input");
    input.id = "search"
    input.placeholder = "City";
    form.appendChild(input);
    searchBar.appendChild(form);
}

export function currentWeatherDisplay(json){
    let weatherDiv = document.getElementById("currentWeatherDiv");
    let div = document.createElement("div");
    

    let info = currentCondition(json);
    let time = document.createElement("span")
    time.textContent = info.datetime;

    let location = document.createElement("span");
    location.textContent=json.resolvedAddress;

    div.appendChild(time);
    div.appendChild(location);
    weatherDiv.appendChild(div);

    
    
}

export function currentWeatherInfoExtended(json){
    let info = currentCondition(json);
    const elementData = 
    [
        {title: "sunrise", textContent: info.sunrise},
        {title: "sunset", textContent: info.sunset},
        {title: "humidity", textContent: info.humidity},
        {title: "uvindex", textContent: info.uvindex},
    ];

    const weatherInfoDiv = document.getElementById("weatherInfoTabs");
    elementData.forEach( ({title,textContent}) =>{
        let infoDiv = document.createElement("div");

        let titleOfDiv = document.createElement("span");
        titleOfDiv.textContent = title;
        
        let contentOfDiv = document.createElement("span");
        contentOfDiv.textContent = textContent;

        infoDiv.appendChild(titleOfDiv);
        infoDiv.appendChild(contentOfDiv);
        
        weatherInfoDiv.appendChild(infoDiv);
    });
}