// send me pets and also show hearts/:3 particles on button press

// get html elements 
const button = document.getElementById("petbutton");
const particleBox = document.getElementById("particlearea");

// particles
const imagePath = "imgs/other/nekofern/";
const particles = ["heart_1.png", "heart_2.png", "heart_2.png", "colon3_.png"]

// cooldown so my webserver running on an intel pentium from 2013 doesnt die :(
let onCooldown = false;

function sendPet() {
    const particle = createParticle(particleBox);
    particle.addEventListener("animationstart", function() {
        setTimeout(() => {
            particle.remove();
        }, 1900);
    });

    if(onCooldown) {
        return;
    }
    options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };

    var url = 'https://httpserver.shadowkat.cc/discord/pet?pets=' + document.getElementById("pets").value;
    
    // request!! sends me a discord dm through my bot :3
    fetch(url, options).then(handleResponse)
        .then(cooldown)
        .catch(console.log);
}

// 10 second cooldown on sending the dm request
function cooldown() {
    onCooldown = true;
    setTimeout(() => {
        onCooldown = false;
    }, 10000)
}

// create heart / :3 particle when petting nekofern
function createParticle(parentElement = document.body) {
    let particleImage = imagePath + particles[Math.floor(Math.random() * (4))]; // randomize particle image

    var particle = document.createElement("div");
    particle.classList.add("particle"); // for css styling
    particle.classList.add(`particle-anim-${Math.floor(Math.random() * 4)}`) // randomize particle animation
    particle.innerHTML = `<img src=${particleImage} class="particle">`;

    if(parentElement) {
        parentElement.append(particle);
    }

    return particle;
}