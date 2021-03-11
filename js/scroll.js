// init controller
var controller = new ScrollMagic.Controller();

// Pin nav bar to the top
new ScrollMagic.Scene({
        offset: 107
    })
    .setPin("#site-navigation")
    .setClassToggle("#site-navigation", "site-navigation-pinned")
    .addTo(controller);
