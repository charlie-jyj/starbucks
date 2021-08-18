const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector("header .badges");

// _.throttle(func, wait)
// wait 시간 동안 한 번만 실행된다
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // gsap
        gsap.to(badgeEl, {
            opacity: 0,
            display: "none",
            duration: .5,
        });
    } else {
        gsap.to(badgeEl, {
            opacity: 1,
            display: "block",
            duration: .5,
        });
    }
}, 300));


//fade-in
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, {
        duration: 1,
        opacity: 1,
        delay: (index+1)*.7,
    })
});