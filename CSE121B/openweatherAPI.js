let message=document.querySelector('#msg');
message.style.display='none';

async function fetchAPI(api){
    const response=await fetch(api);
    if (response.ok){
    const data=await response.json();
       
   displayResults(data);
    }
    else{
        console.error();
    }  
}

function displayResults(data){
 
    let img=document.querySelector('#img');
    let icon= `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    img.setAttribute('src', icon);
    let description=data.list[0].weather[0].description;
   
    document.querySelector('#temp').innerHTML=`${data.list[0].main.temp}&degC`;
    document.querySelector('#description').innerHTML=description;
    
    message.style.display='block';
    if (data.list[0].main.temp > 25){
        message.innerHTML="OHH, I am burning today.";
    }
    else if(data.list[0].main.temp < 10){
        message.innerHTML="It's cold today, Yukh!";   
    }
    else{
        message.innerHTML="Wao! It is very pleasant weather today.";  
    }
}


function getWeather(){
    const city=document.querySelector('#city').value;     
    const apiCall=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=ded02857eed646cffb678b4e38d1dde4&units=metric&units=metric`;
    fetchAPI(apiCall);
}



var currentYear = new Date().getFullYear();
    // Set element with id year to current year
    document.getElementById("currentyear").innerHTML = currentYear;
    // Get Last Modified Date
    var lastModifiedDate = document.lastModified;
    document.getElementById("lastmodified").innerHTML = lastModifiedDate;



