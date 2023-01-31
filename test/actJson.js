const myJsonFile="activites.json";
const section=document.querySelector('#activities');

async function jsonFetch() {
   
      const response = await fetch(myJsonFile);
      const data = await response.json();
    displayResults(data);
      
  }

  jsonFetch();

  function displayResults(data) {
         //let w01=data.week01[0];
        data.week05.forEach((week) =>{
            let text= "       |";
            let subset=week.substr(7);
            let weekLink=document.createElement('a');
            let link = document.createTextNode(subset.substr(0, subset.length-5).concat(text));
            weekLink.href = week;
           
            //section.innerHTML= `|`;
       
        weekLink.appendChild(link);
        section.appendChild(weekLink);
        
        console.log(week);

         });       
  }