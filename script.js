function toggleMenu(){
const nav=document.querySelector(".nav-links");
nav.classList.toggle("show");
}

let currentSlide=0;

const slides=document.querySelectorAll(".slide");

function showSlide(index){

if(index>=slides.length){
currentSlide=0;
}

else if(index<0){
currentSlide=slides.length-1;
}

else{
currentSlide=index;
}

slides.forEach(slide=>slide.classList.remove("active"));

slides[currentSlide].classList.add("active");

}

function moveSlide(step){

showSlide(currentSlide+step);

}