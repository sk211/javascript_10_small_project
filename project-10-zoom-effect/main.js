const container = document.getElementById("container");

const img = document.getElementById("img")

container.addEventListener('mousemove', (e)=>{
const x = e.clientX -e.target.offsetLeft;
const y = e.clientY -e.target.offsetTop;

img.style.transformOrigin = `${x}px ${y}px`;
img.style.transform = "scale(2)";

});

container.addEventListener('mouseout', (e)=>{
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
})
