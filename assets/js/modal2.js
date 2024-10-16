const openBtnn = document.getElementById("openModal2");
const closeBtnn = document.getElementById("closeModal2");
const modall = document.getElementById("modal2");

openBtnn.addEventListener("click", () =>{
    modall.classList.add("open2");
});

closeBtnn.addEventListener("click", () =>{
    modall.classList.remove("open2");
});