var tl = new TimelineMax({});
var tl2 = new TimelineMax({});
var tl3 = new TimelineMax({});
var tl4 = new TimelineMax({});
var tl5 = new TimelineMax({});
var tl6 = new TimelineMax({});







tl.from("#om_img", 1, {
    x: -100,
    opacity: 0
});

tl2.from(".video_pic", 1, {
    x: -100,
    opacity: 0
})

tl3.from(".koncurrence_pic", 1, {
    x: -100,
    opacity: 0
})

tl4.from("#b1", 1, {
    x: -100,
    opacity: 0
})

tl5.from(".f_b2", 1, {
    x: -100,
    opacity: 0
}, "=-2")

tl6.from(".video", 1, {
    x: -100,
    opacity: 0
}, "=-10")

const controller = new ScrollMagic.Controller();

//OM sektion
const scene = new ScrollMagic.Scene({
        triggerElement: "#om"

    })

    .setTween(tl)
    .addTo(controller);


//VIDEO sektion

const scene2 = new ScrollMagic.Scene({
        triggerElement: "#video"

    })

    .setTween(tl2)
    .addTo(controller);

//KONCURRENCE sektion

const scene3 = new ScrollMagic.Scene({
        triggerElement: "#koncurrence"

    })

    .setTween(tl3)
    .addTo(controller);

//FÆLLESSKAB SEKTION

const scene4 = new ScrollMagic.Scene({
        triggerElement: "#deltagelse"

    })

    .setTween(tl4)
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
        triggerElement: "#faellesskab"

    })

    .setTween(tl5)
    .addTo(controller);

//INFOGRAFIK SEKTION
const scene6 = new ScrollMagic.Scene({
        triggerElement: ".b2"

    })

    .setTween(tl6)
    .addTo(controller);
