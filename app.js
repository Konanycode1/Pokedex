const search = document.querySelector(".recherche-poke input");

search.addEventListener("input", (e)=>{
    if(e.target.value != ""){
        e.target.parentNode.classList.add("active-input")
    }
    else if(e.target.value === ""){
        e.target.parentNode.classList.remove("active-input")

    }

})