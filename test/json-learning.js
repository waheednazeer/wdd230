
let results=null;
async function fetchAPI(url){
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].weather[0].description);
    console.log(data.list[1].main.temp);
    console.log(data.list[2].main.temp);
    displayResults(data);

}

function displayResults(data){
    let dayNames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weekDays=new Date();
    let dayNo=weekDays.getDay();
   

    let kelvin=data.list[0].main.temp;
    let currentTemp=Math.floor(kelvin);
    
    let img=document.querySelector('#icon');
    let icon= `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    img.setAttribute('src', icon);
    
    let description=data.list[0].weather[0].description;
   
    
    
    document.querySelector('#weather').innerHTML=`${dayNames[dayNo]} Temp is: ${currentTemp} &degC`;
    document.querySelector('#des').innerHTML=description;

    //----------------Next Day Temperature----------------------------
    dayNo+=1;
    console.log(dayNames[dayNo]);
    
    let dayN1=Math.floor(data.list[10].main.temp);
    document.querySelector('#dayN1').innerHTML=`${dayNames[dayNo]} Temp is: ${dayN1} &degC`;

    let imgN1=document.querySelector('#iconN1');
    let iconN1= `https://openweathermap.org/img/w/${data.list[10].weather[0].icon}.png`;
    imgN1.setAttribute('src', iconN1);
   
    document.querySelector('#desN1').innerHTML= data.list[10].weather[0].description;

    //----------------2nd Day weather----------------------
    dayNo+=1;
    let dayN2=Math.floor(data.list[18].main.temp);
    document.querySelector('#dayN2').innerHTML=`${dayNames[dayNo]} Temp is: ${dayN2} &degC`;

    let imgN2=document.querySelector('#iconN2');
    let iconN2= `https://openweathermap.org/img/w/${data.list[18].weather[0].icon}.png`;
    imgN2.setAttribute('src', iconN2);
    document.querySelector('#desN2').innerHTML=data.list[18].weather[0].description;

    



    
}




function getWeather(){
    const city=document.querySelector('#city').value;
    const country=document.querySelector('#country').value;
    
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=ded02857eed646cffb678b4e38d1dde4&units=metric`;
    fetchAPI(url);
}
//https://api.openweathermap.org/data/2.5/forecast?q=Islamabad,pakistan&cnt=10&APPID=ded02857eed646cffb678b4e38d1dde4