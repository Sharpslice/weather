import { currentWeatherDisplay, searchBar,currentWeatherInfoExtended, switches } from "./renderPage";
import { get5DayForecast, getWeatherLocation} from "./weatherFunctions";

import './styles.css';
import { forecast, hours } from "./renderPageRight";



let json;

async function main(optionalParam = "Portland"){
    
    
    json = await getWeatherLocation(optionalParam);
    
  
   
    console.log(json)
   
    searchBar();
    
    currentWeatherDisplay(json);
    currentWeatherInfoExtended(json);
    forecast(get5DayForecast(json));
    hours(json.days[0]);
    add();
   
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