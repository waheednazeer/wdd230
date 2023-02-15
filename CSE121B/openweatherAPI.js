const forecast = document.querySelector('.forecast');
const current = document.querySelector('#current');

let dayNames=['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let daysDate=new Date();
let day=daysDate.getDay();

console.log(dayNames[day]);

async function fetchAPI(api){
    const response=await fetch(api);
    if (response.ok){
    const data=await response.json();

   displayCurrent(data);    
   displayResults(data);

   console.log(data.list);
    }
    else{
        console.error();
    }  
}

function displayResults(data){

    

    for (let i=8; i<25; i+=8){
        
    let weekday=document.createElement('p');
    let section=document.createElement('section');
    let name=document.createElement('h3');
    let temp=document.createElement('p');
    let descript=document.createElement('p');
    let icon=document.createElement('img');
    let iconSrc= `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;

    icon.setAttribute('src', iconSrc );
    icon.setAttribute('alt', data.list[i].weather[0].description);
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('width', '75');
    icon.setAttribute('height', '75');
    
    weekday.innerHTML=dayNames[day];
    descript.innerHTML=`${data.list[i].weather[0].description}`;
    temp.innerHTML=`${data.list[i].main.temp}&degC`;
   
    section.appendChild(weekday);    
    section.appendChild(icon);
    section.appendChild(descript);
    section.appendChild(temp);
   
    forecast.appendChild(section);
    day++;
    
    }

} 

getWeather();

function getWeather(){
      
    const apiCall=`https://api.openweathermap.org/data/2.5/forecast?q=islamabad&APPID=ded02857eed646cffb678b4e38d1dde4&units=metric&units=metric`;
    fetchAPI(apiCall);
}



function displayCurrent(data){
    let sectionIcon=document.createElement('section');
    let sectionTemp=document.createElement('section');
    let name=document.createElement('h3');
    let temp=document.createElement('p');
    let descript=document.createElement('p');
    let icon=document.createElement('img');
    let iconSrc= `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    icon.setAttribute('src', iconSrc );
    icon.setAttribute('alt', data.list[0].weather[0].description);
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('width', '100');
    icon.setAttribute('height', '100');
    
    //descript.innerHTML=`${data.list[0].weather[0].description}`;
    temp.innerHTML=`${data.list[0].main.temp}&degC ${data.list[0].weather[0].description}`;
   
        
    sectionIcon.appendChild(icon);
    sectionTemp.appendChild(temp);
   
    current.appendChild(sectionIcon);
    current.appendChild(sectionTemp);
}




var currentYear = new Date().getFullYear();
    // Set element with id year to current year
    document.getElementById("currentyear").innerHTML = currentYear;
    // Get Last Modified Date
    var lastModifiedDate = document.lastModified;
    document.getElementById("lastmodified").innerHTML = lastModifiedDate;



