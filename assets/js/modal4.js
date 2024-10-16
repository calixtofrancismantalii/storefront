const openBtn4 = document.getElementById("openModal4");
const closeBtn4 = document.getElementById("closeModal4");
const modal4 = document.getElementById("modal4");

openBtn4.addEventListener("click", () =>{
    modal4.classList.add("open4");
});

closeBtn4.addEventListener("click", () =>{
    modal4.classList.remove("open4");
});