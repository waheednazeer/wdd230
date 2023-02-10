
let bannerDate=new Date();
let bannerDay=date.getDay();
//console.log(day);

if (bannerDay > 0 && bannerDay <4){
document.getElementById("banner").style.display = "block";
}
else{
    document.getElementById("banner").style.display = "none"; 
}
