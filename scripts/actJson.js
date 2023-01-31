const myJsonFile="activites.json";
const section=document.querySelector('#jweek01');
const jweek02=document.querySelector('#jweek02');
const jweek03=document.querySelector('#jweek03');
const jweek04=document.querySelector('#jweek04');
const jweek05=document.querySelector('#jweek05');

async function jsonFetch() {
   
      const response = await fetch(myJsonFile);
      const data = await response.json();
    displayResults(data);
      
  }

  jsonFetch();

  function displayResults(data) {
         //for week01;
        data.week01.forEach((week) =>{
            let text= "  |";
            let subset=week.substr(7);
            let weekLink=document.createElement('a');
            let link = document.createTextNode(subset.substr(0, subset.length-5).concat(text));
            weekLink.href = week;
                
            weekLink.appendChild(link);
            section.appendChild(weekLink);
               
         }); 
         
         data.week02.forEach((week) =>{
            let text= "  |";
            let subset=week.substr(7);
            let weekLink=document.createElement('a');
            let link = document.createTextNode(subset.substr(0, subset.length-5).concat(text));
            weekLink.href = week;
                
            weekLink.appendChild(link);
            jweek02.appendChild(weekLink);
               
         }); 
         data.week03.forEach((week) =>{
            let text= "  |";
            let subset=week.substr(7);
            let weekLink=document.createElement('a');
            let link = document.createTextNode(subset.substr(0, subset.length-5).concat(text));
            weekLink.href = week;
                
            weekLink.appendChild(link);
            jweek03.appendChild(weekLink);
               
         }); 
         data.week04.forEach((week) =>{
            let text= "  |";
            let subset=week.substr(7);
            let weekLink=document.createElement('a');
            let link = document.createTextNode(subset.substr(0, subset.length-5).concat(text));
            weekLink.href = week;
                
            weekLink.appendChild(link);
            jweek04.appendChild(weekLink);
               
         });
         data.week05.forEach((week) =>{
            let text= "  |";
            let subset=week.substr(7);
            let weekLink=document.createElement('a');
            let link = document.createTextNode(subset.substr(0, subset.length-5).concat(text));
            weekLink.href = week;
                
            weekLink.appendChild(link);
            jweek05.appendChild(weekLink);
               
         });
                      
  }