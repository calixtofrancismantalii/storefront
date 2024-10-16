const openBtn3 = document.getElementById("openModal3");
const closeBtn3 = document.getElementById("closeModal3");
const modal3 = document.getElementById("modal3");


openBtn3.addEventListener("click", () =>{
    modal3.classList.add("open3");
});

closeBtn3.addEventListener("click", () =>{
    modal3.classList.remove("open3");
});