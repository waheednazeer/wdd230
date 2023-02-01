// select HTML elements in the document
const jweek01=document.querySelector('#jweek01');
const jweek02=document.querySelector('#jweek02');
const jweek03=document.querySelector('#jweek03');
const jweek04=document.querySelector('#jweek04');
const jweek05=document.querySelector('#jweek05');


const url = 'new.json';

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
    //for weeks;
    let keysArray= Object.keys(data.weeks.week01);
    let valuesArray= Object.values(data.weeks.week01);

    let keysW2= Object.keys(data.weeks.week02);
    let valuesW2= Object.values(data.weeks.week02);

    let keysW3= Object.keys(data.weeks.week03);
    let valuesW3= Object.values(data.weeks.week03);

    let keysW4= Object.keys(data.weeks.week04);
    let valuesW4= Object.values(data.weeks.week04);

    let keysW5= Object.keys(data.weeks.week05);
    let valuesW5= Object.values(data.weeks.week05);

    let i=0;

    keysArray.forEach((key) =>{
        console.log(key);

            let text= "  |";
            let weekLink=document.createElement('a');
            let link = document.createTextNode(key.concat(text));
            weekLink.href = valuesArray[i];
                i+=1;
            weekLink.appendChild(link);
            jweek01.appendChild(weekLink);
    });

    keysW2.forEach((key) =>{
        console.log(key);

            let text= "  |";
            let weekLink=document.createElement('a');
            let link = document.createTextNode(key.concat(text));
            weekLink.href = valuesW2[i];
                i+=1;
            weekLink.appendChild(link);
            jweek02.appendChild(weekLink);
    });
  
    keysW3.forEach((key) =>{
        console.log(key);

            let text= "  |";
            let weekLink=document.createElement('a');
            let link = document.createTextNode(key.concat(text));
            weekLink.href = valuesW3[i];
                i+=1;
            weekLink.appendChild(link);
            jweek03.appendChild(weekLink);
    });
    
    keysW4.forEach((key) =>{
        console.log(key);

            let text= "  |";
            let weekLink=document.createElement('a');
            let link = document.createTextNode(key.concat(text));
            weekLink.href = valuesW4[i];
                i+=1;
            weekLink.appendChild(link);
            jweek04.appendChild(weekLink);
    }); 
    keysW5.forEach((key) =>{
        console.log(key);

            let text= "  |";
            let weekLink=document.createElement('a');
            let link = document.createTextNode(key.concat(text));
            weekLink.href = valuesW5[i];
                i+=1;
            weekLink.appendChild(link);
            jweek05.appendChild(weekLink);
    });   
          
    
                 
}
