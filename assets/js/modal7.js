const openBtn7 = document.getElementById("openModal7");
const closeBtn7 = document.getElementById("closeModal7");
const modal7 = document.getElementById("modal7");

openBtn7.addEventListener("click", () =>{
    modal7.classList.add("open7");
});

closeBtn7.addEventListener("click", () =>{
    modal7.classList.remove("open7");
});