const url="https://pokeapi.co/api/v2/pokemon/ditto";

let results=null;
async function fetchAPI(){
    const response=await fetch(url);
    if (response.ok){
    const data=await response.json();
    displayResults(data);

    }
}

function displayResults(data){
results=data;
    console.log("Function", data);
}

fetchAPI(url);
console.log("second", url);