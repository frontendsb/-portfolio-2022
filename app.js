let timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '.slid',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let timeLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.slid',
        start: '0%',
        end: '60%',
        scrub: 1,
    },
});



let timeLine4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.slid',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

timeLine.fromTo('.sliding-text', {y: 40,}, {y: -80, opacity: -8.0});
timeLine2.fromTo('.victoria', {scale: 5 }, {scale: 1, top: '2rem', left:'3rem', opacity: -4.0, x: '50%', y: '50%'});
timeLine4.fromTo('.square', {left: '70%'}, {left: '100%', opacity: 0, rotation: 50});







let timeLine3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.slid',
        start: '0%',
        end: '200%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});




