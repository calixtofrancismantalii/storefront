const openBtn6 = document.getElementById("openModal6");
const closeBtn6 = document.getElementById("closeModal6");
const modal6 = document.getElementById("modal6");

openBtn6.addEventListener("click", () =>{
    modal6.classList.add("open6");
});

closeBtn6.addEventListener("click", () =>{
    modal6.classList.remove("open6");
});