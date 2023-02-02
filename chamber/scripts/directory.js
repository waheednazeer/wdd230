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
		// Create elements to add to the div.cards element
        let card = document.createElement('section');
		
        // elements
        let logo = document.createElement('img');
		let name = document.createElement('p'); // fill in the blank
		let address=document.createElement('p');
		let phone=document.createElement('p');
		let membership=document.createElement('p');
		let web=document.createElement('a');


		// Build the h2 content out to show the prophet's full name
		logo.setAttribute('src', member.logo);
		logo.setAttribute('alt', member.name); // fill in the blank
		logo.setAttribute('loading', 'lazy');
		logo.setAttribute('height', '75px');
		

		name.innerHTML = `${member.name}`;
		address.innerHTML = member.address;
		phone.innerHTML= member.phone;
		membership.innerHTML= member.membership;
        web.href= member.website;
		web.innerHTML= member.website;


		// Build the image portrait by setting all the relevant attributes

		
		
		card.appendChild(logo);
		card.appendChild(name);
		card.appendChild(address);
		card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(web);
		cards.appendChild(card);
		

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
