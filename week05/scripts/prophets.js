const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphetData() {
	const response = await fetch(url);
	const data = await response.json();
	
	displayProphets(data.prophets); 
  }
  
  getProphetData();

  function displayProphets (prophets){
	
	prophets.forEach((prophet) => {
		// Create elements to add to the div.cards element
		let card = document.createElement('section');
		let stats = document.createElement("div");
		stats.classList.add("stats");
		let fullName = document.createElement('p'); // fill in the blank
		let portrait = document.createElement('img');
		let birthday=document.createElement('p');
		let death=document.createElement('p');
		let birthplace=document.createElement('p');
		let length=document.createElement('p');
		let numOfChilderen=document.createElement('p');


		// Build the h2 content out to show the prophet's full name
		fullName.innerHTML = `<h2>${prophet.name} ${prophet.lastname} </h2>`;
		birthday.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
		death.innerHTML= `<span class="label">Death:</span> ${prophet.death}`;
		birthplace.innerHTML= `<span class="label">Birthplace:</span> ${prophet.birthplace}`;
		numOfChilderen.innerHTML= `<span class="label">Childeren:</span> ${prophet.numofchildren}`;


		// Build the image portrait by setting all the relevant attributes
		portrait.setAttribute('src', prophet.imageurl);
		portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
		portrait.setAttribute('loading', 'lazy');
		portrait.setAttribute('width', '340');
		portrait.setAttribute('height', '440');
		
		stats.appendChild(birthday);
		stats.appendChild(death);
		stats.appendChild(birthplace);
		stats.appendChild(length);
		stats.appendChild(numOfChilderen);
		
		card.appendChild(fullName);
		card.appendChild(stats);
		card.appendChild(portrait);
		cards.appendChild(card);
		

});
	
 }