const openBtn5 = document.getElementById("openModal5");
const closeBtn5 = document.getElementById("closeModal5");
const modal5 = document.getElementById("modal5");

openBtn5.addEventListener("click", () =>{
    modal5.classList.add("open5");
});

closeBtn5.addEventListener("click", () =>{
    modal5.classList.remove("open5");
});