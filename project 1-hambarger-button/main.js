const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () =>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");

    // if(!btn.classList.toggle("active")){
    //     btn.innerHTML = " X";
    // }else{
        
    // }
    
})
