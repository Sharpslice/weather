import { convertTemp, currentCondition, farenheitToCelcius, getWeatherIcon } from "./weatherFunctions";


export function searchBar(){
    let header = document.getElementById("header");
    header.innerHTML="";
    let form = document.createElement("form");
    form.id = "searchForm";
    let input = document.createElement("input");
    input.id = "search"
    input.placeholder = "City";
    input.type= "text";
    input.name ="search";
    form.appendChild(input);
    header.appendChild(form);
}

export function toggleTemp(){
    let header =document.getElementById("header");
    let toggleLabel = document.createElement("label");
    let toggleInput = document.createElement("input");
    toggleInput.type="checkbox";
    let toggleSpan = document.createElement("span");

    toggleLabel.id = "switch";
    toggleInput.id = "checkbox";
    toggleSpan.id ="slider round";

    toggleLabel.appendChild(toggleInput);
    toggleLabel.appendChild(toggleSpan);
    header.appendChild(toggleLabel);
}

export function currentWeatherDisplay(json){
    


    let weatherDiv = document.getElementById("currentData");
    weatherDiv.innerHTML="";
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

export function currentWeatherInfoExtended(json,tempScale){
    let info = currentCondition(json);
    let weatherTemp = convertTemp(info.temp,tempScale);

    const weatherInfoDiv = document.getElementById("module");
    weatherInfoDiv.innerHTML="";
  

    const weatherSymbolDiv = document.createElement("div");
    const weatherSymbol = document.createElement("img");
    weatherSymbol.src = getWeatherIcon(info.icon);
    weatherSymbol.width =100;
    weatherSymbol.height=100;

    const weatherCondition = document.createElement("span");
    weatherCondition.textContent=info.conditions;
    
    weatherSymbolDiv.appendChild(weatherSymbol);
    weatherSymbolDiv.appendChild(weatherCondition);
    weatherInfoDiv.appendChild(weatherSymbolDiv);

    const currentTempDiv = document.createElement("div");
    const temp = document.createElement("Span");
    temp.textContent = `${weatherTemp} F°`;
    currentTempDiv.appendChild(temp);
    weatherInfoDiv.appendChild(currentTempDiv)






    const elementData = 
    [
        {title: "sunrise: ", textContent: info.sunrise},
        {title: "sunset: ", textContent: info.sunset},
        {title: "humidity: ", textContent: info.humidity},
        {title: "uvindex: ", textContent: info.uvindex},
    ];

    
    let infoDiv = document.createElement("div");
    infoDiv.id="extendedInfo"
    elementData.forEach( ({title,textContent}) =>{
        let extendedInfoDiv = document.createElement("div");

        let titleOfDiv = document.createElement("span");
        titleOfDiv.textContent = title;
        
        let contentOfDiv = document.createElement("span");
        contentOfDiv.textContent = textContent;

        extendedInfoDiv.appendChild(titleOfDiv);
        extendedInfoDiv.appendChild(contentOfDiv);
        infoDiv.appendChild(extendedInfoDiv)
        
        weatherInfoDiv.appendChild(infoDiv);
    });
}