import { currentWeatherDisplay, searchBar,currentWeatherInfoExtended, switches } from "./renderPage";
import { get5DayForecast, getWeatherLocation} from "./weatherFunctions";

import './styles.css';
import { forecast, hours } from "./renderPageRight";



let json;

async function main(){

    


    json = await getWeatherLocation("portland");
    console.log(json)
   
    searchBar();
    
    currentWeatherDisplay(json);
    currentWeatherInfoExtended(json);
    forecast(get5DayForecast(json));
    hours(json.days[0]);
   
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