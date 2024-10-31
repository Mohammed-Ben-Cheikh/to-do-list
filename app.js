const add = document.getElementById("Add");
const close = document.getElementById("btn_close");
const form = document.getElementById("form");

add.addEventListener("click",()=>{
    form.classList.remove("hidden");
})

close.addEventListener("click",()=>{
    form.classList.add("hidden");
})