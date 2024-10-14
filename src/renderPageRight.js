
import {format, parseISO} from 'date-fns';
import {getHours,parse} from 'date-fns';



export function forecast(forecastData){
    const forecastDiv = document.getElementById("forecast");
    forecastData.forEach((element)=>{
        let dayDiv = document.createElement("div");
        let day = document.createElement("span");
        day.textContent= dayIntoWeek(element.datetime);
        let temp = document.createElement("span");
        temp.textContent=element.temp;
        dayDiv.appendChild(day);
        dayDiv.appendChild(temp);
        
        forecastDiv.appendChild(dayDiv);
    })
    
}

export function hours(day){
    let hourlyDiv = document.getElementById("hourly");
    (day.hours).forEach((element)=>{
        console.log(element.datetime)
        let hourDiv = document.createElement("div");
        let time = document.createElement("span");
        time.textContent=timeIntoHour(element.datetime);

        let temp = document.createElement("span");
        temp.textContent=Math.trunc(element.temp);

        hourDiv.appendChild(time);
        hourDiv.appendChild(temp);
        hourlyDiv.appendChild(hourDiv);
    });
    
}
function timeIntoHour(dateStr){
    const time = parse(dateStr, 'HH:mm:ss', new Date());
    return getHours(time);
}
function dayIntoWeek(dateStr){
    const date = parseISO(dateStr);

    const dayOfWeek = format(date,'EEEE');
    return dayOfWeek;

}