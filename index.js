// smooth scroll
const lenis = new Lenis({})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

// const 
const bg1 = document.querySelector('.wrapper'),
    bg2 = document.querySelector('.bg2'),
    mountains = document.querySelector('.mountains'),
    soldier = document.querySelector('.soldier'),
    h1 = document.querySelector('h1 span');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top bottom',
        scrub: 1
    }
})

gsap.set(soldier, { scale: 0.8 });
tl
    .to(mountains, { scale: 1.4, y: 30 })
    .to(soldier, { scale: 1.7, y: 90 }, 0)

gsap.from(h1, {
    yPercent: 100,
    scrollTrigger: {
        trigger: h1,
        start: 'top bottom',
        scrub: 1
    }
})