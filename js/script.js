var hamble = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamble.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");


})