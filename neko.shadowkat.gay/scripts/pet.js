// send me pets and also show hearts/:3 particles on button press

const button = document.getElementById("petbutton");
const particleBox = document.getElementById("particlearea");

const imagePath = "imgs/other/nekofern/";
const particles = ["heart_1.png", "heart_2.png", "heart_2.png", "colon3_.png"]

function sendPet() {
    const particle = createParticle(particleBox);
    particle.addEventListener("animationstart", function() {
        setTimeout(() => {
            particle.remove();
        }, 1900);
    });

    options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };

    var url = 'https://httpserver.shadowkat.cc/discord/pet?pets=' + document.getElementById("pets").value;

    // request!!
    fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleCacheError);
}

function createParticle(parentElement = document.body) {
    let particleImage = imagePath + particles[Math.floor(Math.random() * (4))]; // randomize particle image

    var particle = document.createElement("div");
    particle.classList.add("particle");
    particle.classList.add(`particle-anim-${Math.floor(Math.random() * 4)}`) // randomize particle animation
    particle.innerHTML = `<img src=${particleImage} class="particle">`;

    if(parentElement) {
        parentElement.append(particle);
    }

    return particle;
}