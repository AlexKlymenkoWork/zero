
// JavaScript
window.sr = ScrollReveal();
sr.reveal('article', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('#features h2', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('#features div.second', {
    delay: 300,
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('#features div.third', {
    delay: 600,
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('#features div.fourth', {
    delay: 900,
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('#description img', {
    delay: 300,
    duration: 2000,
    origin: 'left',
    distance: '50px'
});
sr.reveal('#description div.info-text', {
    delay: 600,
    duration: 2000,
    origin: 'rigth',
    distance: '50px'
});
sr.reveal('#contact h2', {
    delay: 300,
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('#contact div.contact-form', {
    delay: 600,
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
});






var navButton = document.getElementById("nav-toggle-button");

function toggleNavDisplay(event) {
    // prevent hyperlink from running
    event.preventDefault();

    // get the resonsive-nav container
    var responsiveNav = document.getElementById("responsive-nav");

    // toggle the showNav CSS on the responsive nav container
    // if the showNav class is there, it is removed; else it is added
    // with a single property: toggle
    responsiveNav.classList.toggle("showNav");
}

navButton.addEventListener("click", toggleNavDisplay);