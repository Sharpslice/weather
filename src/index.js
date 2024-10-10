import { currentWeatherDisplay, searchBar,currentWeatherInfoExtended, switches } from "./renderPage";
import { currentCondition, get10DayForecast, getWeatherLocation, hourlyWeather } from "./weatherFunctions";

import './styles.css';
import './left.css';
import './right.css';
import forecast from './renderPageRight'; // Default import
import { description222 } from './renderPageRight'; // Named import


async function main(){

    


    let json = await getWeatherLocation("portland");
    console.log(json)
    switches();
    searchBar();
    
    currentWeatherDisplay(json);
    currentWeatherInfoExtended(json);
    description222(json);
    forecast(get10DayForecast(json))
    
   
}
main()