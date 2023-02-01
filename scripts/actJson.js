// select HTML elements in the document
const jweek01=document.querySelector('#jweek01');
const jweek02=document.querySelector('#jweek02');
const jweek03=document.querySelector('#jweek03');
const jweek04=document.querySelector('#jweek04');
const jweek05=document.querySelector('#jweek05');


const myFile = 'activities.json';

async function apiFetch() {
    try {
      const response = await fetch(myFile);
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
    let keysW1= Object.keys(data.weeks.week01);
    let valuesW1= Object.values(data.weeks.week01);

    let keysW2= Object.keys(data.weeks.week02);
    let valuesW2= Object.values(data.weeks.week02);

    let keysW3= Object.keys(data.weeks.week03);
    let valuesW3= Object.values(data.weeks.week03);

    let keysW4= Object.keys(data.weeks.week04);
    let valuesW4= Object.values(data.weeks.week04);

    let keysW5= Object.keys(data.weeks.week05);
    let valuesW5= Object.values(data.weeks.week05);

    printKeys(keysW1, valuesW1, jweek01);
    printKeys(keysW2, valuesW2, jweek02);
    printKeys(keysW3, valuesW3, jweek03);
    printKeys(keysW4, valuesW4, jweek04);
    printKeys(keysW5, valuesW5, jweek05);  
                   
}

function printKeys(keys,values, jweek){
    let i=0;
keys.forEach((key) =>{
    console.log(key);

        let text= "  |";
        let weekLink=document.createElement('a');
        let link = document.createTextNode(key.concat(text));
        weekLink.href = values[i];
            i+=1;
        weekLink.appendChild(link);
        jweek.appendChild(weekLink);
});
}   
