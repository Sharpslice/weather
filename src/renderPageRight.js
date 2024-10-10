
import {format, parseISO} from 'date-fns';

export default function forecast(foreCastArray)
{
    const rightSideDiv = document.getElementById("rightSide");
    
    const fragment = document.createDocumentFragment();


    
    let forecastContainer = document.createElement("ul")
    foreCastArray.forEach( (element) =>{
        
        let dayDiv = document.createElement("li");

        let day = document.createElement("span");


        let dayOfWeek = dayIntoWeek(element.datetime)
        day.textContent=dayOfWeek;
        
        let minTemp = document.createElement("span");
        minTemp.textContent = element.tempmin;

        let maxTemp = document.createElement("span");
        maxTemp.textContent = element.tempmax;

        dayDiv.appendChild(day);
        dayDiv.appendChild(minTemp);
        dayDiv.appendChild(maxTemp);
        forecastContainer.appendChild(dayDiv);
                
    });
    fragment.appendChild(forecastContainer);
    rightSideDiv.appendChild(fragment)
} 
export function description222(data){
    let div = document.createElement("div");
    div.id="description"
    let desc = document.createElement("span");

    let conditions = data.currentConditions;
  
    desc.textContent = conditions.conditions;
    console.log(conditions.conditions)
    let feelsLike = document.createElement("span");
    feelsLike.textContent= conditions.feelslike
    div.appendChild(desc);
    div.appendChild(feelsLike);
    const rightSideDiv = document.getElementById("rightSide");
    rightSideDiv.appendChild(div);

}

function dayIntoWeek(dateStr){
    const date = parseISO(dateStr);

    const dayOfWeek = format(date,'EEEE');
    return dayOfWeek;

}