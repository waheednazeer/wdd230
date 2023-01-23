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
  counterRecord.innerHTML = visitCount;
  
} 
else{
  counterRecord.innerHTML = "Welcome for your first visit!";
}
visitCount+=1;
localStorage.setItem("visits-ls", visitCount);

//----------------------Form & Table--------------------------
function myForm(){
const myTable = document.querySelector('table');
let senderName=document.getElementById('name').value;
let senderEmail=document.getElementById('email').value;
let senderRating=document.getElementById('rating').value;
let senderUsername=document.getElementById('rating').value;
let senderUsername2=document.getElementById('username2').value;
if (senderName==''){
window.alert("Full Name can not be kept empty!");
}

if (senderUsername.length <6 || senderUsername.length >13){
  window.alert("Phrase must be between 5 and 12!");
  }
 
if (senderUsername!==senderUsername2){

    window.alert("Please enter same phrase!");
  }
document.getElementById('filled-name').innerHTML=senderName;
document.getElementById('filled-email').innerHTML=senderEmail;
document.getElementById('filled-rating').innerHTML=senderRating;
document.getElementById('filled-username').innerHTML=senderUsername;
myTable.classList.toggle("mytable");
}

//------------------rating sliding bar---------------------
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
    console.log(rangevalue.value);
    if (rangevalue.value>5){
      rangevalue.classList.toggle("myratings");

    }
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);