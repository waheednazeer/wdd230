const options={weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'}
let currentyear={year: 'numeric'}
document.getElementById('currentyear').textContent=new Date().toLocaleDateString('en-US', currentyear);
document.getElementById('lastmodified').textContent=new Date(document.lastModified).toLocaleDateString('en-US', options);

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function myFunction() {
  const modeButton = document.querySelector("#darkmode");
  const mainArea = document.querySelector("main");
    modeButton.classList.toggle("dark");
    mainArea.classList.toggle("dark");
      
    }
