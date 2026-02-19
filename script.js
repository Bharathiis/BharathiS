// Hearts On Click
document.addEventListener("click", function(e){

let heart = document.createElement("div");
heart.innerHTML = "❤️";
heart.classList.add("heart");

heart.style.left = e.clientX + "px";
heart.style.top = e.clientY + "px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},2000);

});
