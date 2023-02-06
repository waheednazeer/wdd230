
let results=null;
async function fetchAPI(api){
    const response=await fetch(api);
    const data=await response.json();
    displayResults(data);
}

function displayResults(data){
    let dayNames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weekDays=new Date();
    let dayNo=weekDays.getDay();
   
    let dayN0=Math.floor(data.list[0].main.temp);
    
    let img=document.querySelector('#iconN0');
    let iconN0= `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    img.setAttribute('src', iconN0);
    
    let desN0=data.list[0].weather[0].description;
   
    document.querySelector('#dayN0').innerHTML=`${dayNames[dayNo]}: ${dayN0} &degC`;
    document.querySelector('#desN0').innerHTML=desN0;

    //----------------Next Day Temperature----------------------------
    dayNo+=1;
    console.log(dayNames[dayNo]);
    
    let dayN1=Math.floor(data.list[10].main.temp);
    document.querySelector('#dayN1').innerHTML=`${dayNames[dayNo]}: ${dayN1} &degC`;

    let imgN1=document.querySelector('#iconN1');
    let iconN1= `https://openweathermap.org/img/w/${data.list[10].weather[0].icon}.png`;
    imgN1.setAttribute('src', iconN1);
   
    document.querySelector('#desN1').innerHTML= data.list[10].weather[0].description;

    //----------------2nd Day weather----------------------
    dayNo+=1;
    let dayN2=Math.floor(data.list[18].main.temp);
    document.querySelector('#dayN2').innerHTML=`${dayNames[dayNo]}: ${dayN2} &degC`;

    let imgN2=document.querySelector('#iconN2');
    let iconN2= `https://openweathermap.org/img/w/${data.list[18].weather[0].icon}.png`;
    imgN2.setAttribute('src', iconN2);
    document.querySelector('#desN2').innerHTML=data.list[18].weather[0].description;
    
}
getWeather();

function getWeather(){
        
    const apiCall=`https://api.openweathermap.org/data/2.5/forecast?q=Islamabad,pakistan&APPID=ded02857eed646cffb678b4e38d1dde4&units=metric`;
    fetchAPI(apiCall);
}
//https://api.openweathermap.org/data/2.5/forecast?q=Islamabad,pakistan&cnt=10&APPID=ded02857eed646cffb678b4e38d1dde4