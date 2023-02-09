let spotlightCards=document.querySelector('#spotlight-cards');
let membersFile='data/members.json';


async function getMembers(){
    const response= await fetch(membersFile);
    const data= await response.json();
    let members=data.members
    let newMembers=filterMembers(members);
    let spot=selectThree(newMembers)
    printCards(spot);
       
}
getMembers();

function filterMembers(members){ // filtering members that are silver or gold members.
    const arr=[];
    let a=0;

    for (let i=0; i< members.length; i++){
        if (members[i].membership == 'Gold' || members[i].membership == 'Silver' ){
            arr[a]=members[i];
            a++;
        }
    }
    return arr;
}

function printCards(newMembers){

    newMembers.forEach(member => {
        
    
    let section=document.createElement('section');
    let name=document.createElement('h3');
    let address=document.createElement('p');
    let phone=document.createElement('p');
    let logo=document.createElement('img');
    let website=document.createElement('a');

    logo.setAttribute('src', member.logo);
	logo.setAttribute('alt', member.name);

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
    spotlightCards.appendChild(section);
});
}

function selectThree(array){ // selecting unique three companies from filtered members
  let name=[];
  let oth=[...new Set(name)]
 
    for (let i=0; oth.length < 3; i++){
        select=Math.floor(Math.random()*5);
        name[i]= array[select];
        oth=[...new Set(name)]
       
    }
      //console.log(name);  
     //console.log(oth); 
     return oth;
    }
    

