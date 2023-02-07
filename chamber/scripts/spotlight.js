const myFile = "data/members.json";
const cards = document.querySelector('.spotlight-2');
const spotlight1 = document.querySelector('.spotlight-1');
const spotlight3 = document.querySelector('.spotlight-3');

async function getProphetData() {
	const response = await fetch(myFile);
	const data = await response.json();
	
	displayProphets(data.members, cards); 
    displayProphets(data.members, spotlight1);
    displayProphets(data.members, spotlight3);
    console.log(data)
  }
  
  getProphetData();

  function displayProphets (members, parent){
	let i=Math.floor(Math.random() * 6);
	let member=members[i];
		// Create elements to add to the div.cards element
        let card = document.createElement('section');
		
        // elements
        let logo = document.createElement('img');
		let name = document.createElement('p'); // fill in the blank
		let address=document.createElement('p');
		let phone=document.createElement('p');
		let membership=document.createElement('p');
		let web=document.createElement('a');


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


			
		
		card.appendChild(logo);
		card.appendChild(name);
		card.appendChild(address);
		card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(web);
		parent.appendChild(card);
		



 }





