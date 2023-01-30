// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const cTemp = document.querySelector('#c-temp');
const fTemp = document.querySelector('#f-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier,germany&APPID=7c4be2e672b7473cb72ef14c53adfb41';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
    let fDegTemp=Math.floor((cDegTemp * 9/5) + 32);
    console.log(fDegTemp);
    currentTemp.innerHTML = `${data.main.temp}&deg;K`;
    cTemp.innerHTML = `${cDegTemp}&deg;C`;
    fTemp.innerHTML = `${fDegTemp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }