
let date=new Date();
let day=date.getDay();
//console.log(day);

if (day > 0 && day <4){
document.getElementById("banner").style.display = "block";
}
else{
    document.getElementById("banner").style.display = "none"; 
}
