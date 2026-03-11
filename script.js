function masukWebsite(){

document.getElementById("welcome").style.display="none";
document.getElementById("mainContent").style.display="block";

munculSaatScroll()

}

function munculSaatScroll(){

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{
observer.observe(card);
});

}
