function createHeart(){
    const heart = document.createElement("div")

    heart.classList.add('heart');

    heart.innerText ="❤";

    heart.style.left =Math.random() * 100+ "vw"

    heart.style.animationDuration= Math.random() * 2 +3 + "s";

    document.body.appendChild(heart)
}
setInterval(createHeart, 300)

function createSnow(){
    const snow = document.createElement('div');

    snow.classList.add('snow');

    snow.style.left= Math.random() * 100+ "vw";

    snow.style.animationDuration = Math.random() * 2 + 3 + "s"

    snow.innerText="❄";


    document.body.appendChild(snow )
}

setInterval(createSnow, 300)