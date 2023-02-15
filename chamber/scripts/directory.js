const myFile = "data/members.json";
const cards = document.querySelector('.main-cards');

async function getProphetData() {
	const response = await fetch(myFile);
	const data = await response.json();
	
	displayProphets(data.members); 
    //console.log(data)
  }
  
  getProphetData();

  function displayProphets (members){
	
	members.forEach((member) => {
	        	
        // elements
		let section=document.createElement('section');
		let name=document.createElement('h2');
		let address=document.createElement('p');
		let phone=document.createElement('p');
		let logo=document.createElement('img');
		let website=document.createElement('a');

		logo.setAttribute('src', member.logo);
		logo.setAttribute('alt', member.name);
		//logo.setAttribute('loading', 'lazy');
		logo.setAttribute('width', '200');
		logo.setAttribute('height', '100');
		
		name.innerHTML=`${member.name}`;
		address.innerHTML=member.address;
		phone.innerHTML=member.phone;
		website.href=member.website;
		website.innerHTML=member.website;
		
		section.appendChild(name);
		section.appendChild(logo);
		section.appendChild(address);
		section.appendChild(phone);
		section.appendChild(website);
		cards.appendChild(section);
		

});
	
 }

 // this is toggle code
 const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".main-cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
