
import nightIcon from "./icons/night.png"
import sunnyIcon from "./icons/sunny.png"
import cloudyIcon from "./icons/cloudy.png"
import cloudyNightIcon from "./icons/cloudy-night.png";
import rainIcon from "./icons/rain.png";
export async function getWeatherLocation(location)
{
    const apiKey = "XWKHC533BBTH5QXSTETE2P8P3";
    const url =`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    try {
        console.log(url)
        const response = await fetch(url)
        if(!response.ok)
            {
                throw new error("Network response not okay")
            }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("error fetching data",error)
    }
}
export function currentCondition(data){
    return data.currentConditions;
}
export function get5DayForecast(data)
{
    let foreCastArray = (data.days).slice(0,6);
    
    return foreCastArray;
    
}

export function getWeatherIcon(icon){
    const weatherIcons=
    {
        "clear-day": sunnyIcon,
        "clear-night": nightIcon,
        "partly-cloudy-day": cloudyIcon,
        "cloudy": cloudyIcon,
        "partly-cloudy-night": cloudyNightIcon,
        "rain": rainIcon,
    }

    return weatherIcons[icon];
}

export function hourlyWeather(data){

    let hours = data.days[0].hours.slice(0,12);
    return hours;
}