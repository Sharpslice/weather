import { currentWeatherDisplay, searchBar,currentWeatherInfoExtended, switches } from "./renderPage";
import { get5DayForecast, getWeatherLocation} from "./weatherFunctions";

import './styles.css';
import { forecast, hours } from "./renderPageRight";





async function main(){

    


    let json = await getWeatherLocation("portland");
    console.log(json)
   
    searchBar();
    
    currentWeatherDisplay(json);
    currentWeatherInfoExtended(json);
    forecast(get5DayForecast(json));
    hours(json.days[0]);
   
}
main()