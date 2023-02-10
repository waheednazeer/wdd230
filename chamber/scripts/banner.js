
let bannerDate=new Date();
let bannerDay=bannerDate.getDay();
//console.log(bannerDay);

if (bannerDay > 0 && bannerDay <4){
document.getElementById("banner").style.display = "block";
}
else{
    document.getElementById("banner").style.display = "none"; 
}
