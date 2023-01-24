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
let submittedForm=document.querySelector('table');
let senderName=document.getElementById('name').value;
let senderEmail=document.getElementById('email').value;
let senderRating=document.getElementById('r').value;
let senderUsername=document.getElementById('username').value;
let senderUsername2=document.getElementById('username2').value;
let senderComments=document.getElementById('comments').value;


if (senderRating < 6){
  document.getElementById('filled-rating').style.color="red";
}
else{
  document.getElementById('filled-rating').style.color="blue";
}

if(senderName == ''){
    window.alert("Name can not be kept empty!");
  }
  else if (senderEmail == ''){
    window.alert("Email can not be kept empty!");
  }
  else if (senderUsername.length<5 || senderUsername.length >12){
    window.alert("Phrase muste be between 5 & 12 digits!");
  }
  else if (senderUsername !== senderUsername2){
    window.alert("Re-enter phrase muste be same!");
  }
  else if (senderComments.length <5){
    window.alert("Please write one sentence in Message box!");
  }
  else{
document.getElementById('filled-name').innerHTML=senderName;
document.getElementById('filled-email').innerHTML=senderEmail;
document.getElementById('filled-rating').innerHTML=senderRating;
document.getElementById('filled-username').innerHTML=senderUsername;
submittedForm.classList.toggle("mytable");
  }
}

//------------------rating sliding bar---------------------
const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
    console.log(rangevalue.value);
    
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);