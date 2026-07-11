/*=========================================================
        PURPLE MEMORIES - SCRIPT.JS (PART 1)
=========================================================*/

/*==============================
        LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2500);

});

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

/*==============================
        SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==============================
        COUNTDOWN
==============================*/

// CHANGE THIS DATE

const birthdayDate = new Date("December 19, 2026 00:00:00");

function updateCountdown(){

    const now = new Date();

    const distance = birthdayDate - now;

    const second = 1000;

    const minute = second*60;

    const hour = minute*60;

    const day = hour*24;

    const days = Math.floor(distance/day);

    const hours = Math.floor((distance%day)/hour);

    const minutes = Math.floor((distance%hour)/minute);

    const seconds = Math.floor((distance%minute)/second);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

/*==============================
        HERO BUTTON EFFECT
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/*==============================
        PARALLAX HERO IMAGE
==============================*/

window.addEventListener("mousemove",(e)=>{

    const image=document.querySelector(".photo-frame");

    if(!image) return;

    let x=(window.innerWidth/2-e.pageX)/40;

    let y=(window.innerHeight/2-e.pageY)/40;

    image.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;

});

/*==============================
        SCROLL INDICATOR
==============================*/

const scrollIndicator=document.querySelector(".scroll-indicator");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        scrollIndicator.style.opacity="0";

    }

    else{

        scrollIndicator.style.opacity="1";

    }

});


/*=========================================================
        SCRIPT.JS (PART 2)
=========================================================*/

/*==============================
        GALLERY LIGHTBOX
==============================*/

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach((img)=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=img.src;

    });

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

}

window.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

/*==============================
        TYPING LETTER
==============================*/

const letter=`Dear Friend,

Happy Birthday! 💜

Today is your special day, and I just want you to know how grateful I am to have you in my life.

Thank you for your kindness,
your beautiful smile,
your endless support,
and all the wonderful memories we've shared.

May this year bring you happiness,
good health,
success,
and countless reasons to smile.

Never stop being the amazing person you are.

Happy Birthday once again!

With lots of love,
Your Friend ❤️`;

const typingElement=document.getElementById("typingText");

let index=0;

function typeLetter(){

    if(!typingElement) return;

    if(index<letter.length){

        typingElement.innerHTML+=letter.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}

const letterSection=document.querySelector(".letter-section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeLetter();

observer.disconnect();

}

});

});

if(letterSection){

observer.observe(letterSection);

}

/*==============================
        SCROLL TO TOP
==============================*/

const scrollTop=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTop.style.display="block";

}else{

scrollTop.style.display="none";

}

});

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
        MUSIC
==============================*/

const song=document.getElementById("birthdaySong");

document.addEventListener("click",()=>{

if(song && song.paused){

song.volume=.5;

}

},{once:true});

/*==============================
        CAKE
==============================*/

const cake=document.getElementById("cake3D");

cake.addEventListener("click",()=>{

cake.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:500

});

alert("🎂 Make a beautiful birthday wish! 💜");

});

/*==============================
        IMAGE HOVER EFFECT
==============================*/

galleryItems.forEach((img)=>{

img.addEventListener("mousemove",(e)=>{

const rect=img.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

img.style.transformOrigin=`${x}px ${y}px`;

});

});

/*==============================
        RANDOM HEARTS
==============================*/

function createHeart(){

const container=document.getElementById("floatingHearts");

if(!container) return;

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="💜";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(20+Math.random()*25)+"px";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,700);

/*=========================================================
        SCRIPT.JS (PART 3 - FINAL)
=========================================================*/

/*==============================
        GIFT BOX
==============================*/

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if (giftBox) {

    giftBox.addEventListener("click", () => {

        giftBox.classList.add("open");

        setTimeout(() => {

            giftMessage.style.display = "block";

            giftMessage.animate([
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ], {
                duration: 1000,
                fill: "forwards"
            });

        }, 700);

    });

}

/*==============================
        CONFETTI
==============================*/

function createConfetti() {

    const container = document.getElementById("confetti-container");

    if (!container) return;

    const colors = [
        "#ffffff",
        "#c77dff",
        "#9d4edd",
        "#7b2cbf",
        "#e0aaff"
    ];

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 7000);

    }

}

/*==============================
        CELEBRATE BUTTON
==============================*/

const wishBtn = document.getElementById("wishBtn");

if (wishBtn) {

    wishBtn.addEventListener("click", () => {

        createConfetti();

        alert(
            "💜 Happy Birthday!\n\nYou are one of the most wonderful people in my life.\nWishing you endless happiness, love, success, and beautiful memories. 🎂✨"
        );

    });

}

/*==============================
        SIMPLE FIREWORKS
==============================*/

const fireworkBtn = document.getElementById("fireworkBtn");

if (fireworkBtn) {

    fireworkBtn.addEventListener("click", () => {

        for (let i = 0; i < 8; i++) {

            setTimeout(() => {

                createConfetti();

            }, i * 500);

        }

    });

}

/*==============================
        FLOATING PARTICLES
==============================*/

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 80; i++) {

        const particle = document.createElement("span");

        particle.style.position = "absolute";

        particle.style.width = "3px";

        particle.style.height = "3px";

        particle.style.background = "white";

        particle.style.borderRadius = "50%";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.top = Math.random() * 100 + "%";

        particle.style.opacity = Math.random();

        particle.style.animation =
            `twinkle ${2 + Math.random() * 5}s infinite`;

        particles.appendChild(particle);

    }

}

/*==============================
        SCROLL ANIMATION
==============================*/

const sections = document.querySelectorAll("section");

const reveal = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.animate([

                {
                    opacity: 0,
                    transform: "translateY(80px)"
                },

                {
                    opacity: 1,
                    transform: "translateY(0)"
                }

            ], {

                duration: 900,

                fill: "forwards"

            });

        }

    });

}, {

    threshold: .2

});

sections.forEach((section) => {

    reveal.observe(section);

});

/*==============================
        NAVBAR SHADOW
==============================*/

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(25,0,45,.90)";

        nav.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.35)";

    }

    else {

        nav.style.background =
            "rgba(255,255,255,.05)";

        nav.style.boxShadow = "none";

    }

});

/*==============================
        HAPPY BIRTHDAY CONSOLE
==============================*/

console.log(
`
💜========================================💜

        HAPPY BIRTHDAY

     Made with ❤️ by You

💜========================================💜
`
);