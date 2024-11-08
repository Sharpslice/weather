import { currentWeatherDisplay, searchBar,currentWeatherInfoExtended, switches, toggleTemp } from "./renderPage";
import { farenheitToCelcius, get5DayForecast, getWeatherLocation} from "./weatherFunctions";

import './styles.css';
import './toggle.css';
import { forecast, hours } from "./renderPageRight";



let json;

async function main(optionalParam = "Portland"){
    
    
    json = await getWeatherLocation(optionalParam);
    console.log(json)
    updateUI(json);  
    add();
   
}

function updateUI(json){
    searchBar();
    toggleTemp();
    currentWeatherDisplay(json);
    currentWeatherInfoExtended(json,false);
    forecast(get5DayForecast(json),false);
    hours(json.days[0],false);
}

function add(){
    const form = document.getElementById("searchForm");
    const mainDiv = document.getElementById("main");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const inputValue = document.getElementById("search").value;
        console.log(inputValue)
        
        main(inputValue);
        
})

}




const container = document.querySelector("#forecast");
container.addEventListener('click',(e)=>{
        const foreCastDay = e.target.closest(".forecastDay")
    if(foreCastDay){
        

        let forecastDiv = document.querySelectorAll("#hourly > div");
        forecastDiv.forEach((div)=> div.remove());
        let index  = Number(foreCastDay.getAttribute('day'));
        //console.log(json.days[index]);
        hours(json.days[index])
    }
})
main()