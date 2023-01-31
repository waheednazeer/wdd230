// select HTML elements in the document
const weatherDesc = document.querySelector('#desc');
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Islamabad,pakistan&APPID=ded02857eed646cffb678b4e38d1dde4';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        let temp=data.main.temp;
        
        let cDegTemp=Math.floor(temp-273.15);
       
        
        
        currentTemp.innerHTML = `${cDegTemp}&deg;C`;
        
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        weatherDesc.innerHTML = desc;

        //displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(data) {
    let temp=data.main.temp;
    let cDegTemp=Math.floor(temp-273.15);
   
    console.log(cDegTemp);
    
    currentTemp.innerHTML = `${cDegTemp}&deg;C`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //captionDesc.textContent = `${desc}`;
  }