var tl = new TimelineMax({});
var tl2 = new TimelineMax({});
var tl3 = new TimelineMax({});
var tl4 = new TimelineMax({});
var tl5 = new TimelineMax({});
var tl6 = new TimelineMax({});
const controller = new ScrollMagic.Controller();






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
})

tl6.from("video", 1, {
    x: -100,
    opacity: 0
})
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

const scene4 = new ScrollMagic.Scene({
        triggerElement: "#deltagelse"

    })

    .setTween(tl4)
    .addTo(controller);

const scene5 = new ScrollMagic.Scene({
        triggerElement: "#faellesskab"

    }, "=-2")

    .setTween(tl5)
    .addTo(controller);

const scene6 = new ScrollMagic.Scene({
        triggerElement: "#infografik"

    })

    .setTween(tl6)
    .addTo(controller);
