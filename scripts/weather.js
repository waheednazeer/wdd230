// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Islamabad,pakistan&APPID=7c4be2e672b7473cb72ef14c53adfb41';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data); // uncomment when ready
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
   
    currentTemp.innerHTML = `${cDegTemp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
  }