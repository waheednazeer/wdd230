var currentYear = new Date().getFullYear();

// Set element with id year to current year
document.getElementById("currentyear").innerHTML = currentYear;


// Get Last Modified Date
var lastModifiedDate = document.lastModified;
document.getElementById("lastmodified").innerHTML = lastModifiedDate;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function darkModeToggle() {
    const mainArea = document.querySelector("main");
    mainArea.classList.toggle("dark");
  }
// for visitor counter
let counterRecord = document.querySelector(".counter");
let visitCount = Number(window.localStorage.getItem("visits-ls"));


// Check if page_view entry is present
if (visitCount !== 0) {
  counterRecord.textContent = visitCount;
  
} 
else{
  counterRecord.innerHTML = "Welcome for your first visit!";
}
visitCount+=1;
localStorage.setItem("visits-ls", visitCount);