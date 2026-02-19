// Welcome Click
document.getElementById("welcome").addEventListener("click", function(){
this.style.display="none";
document.getElementById("main").classList.remove("hidden");
});

// Show Section
function showSection(id){
let sections=document.querySelectorAll(".content");
sections.forEach(sec=>sec.style.display="none");
document.getElementById(id).style.display="block";
}

// Hearts Animation
document.addEventListener("click", function(e){
let heart=document.createElement("div");
heart.innerHTML="💕";
heart.classList.add("heart");
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),2000);
});
