window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

window.onload = function () {
    if (window.pageYOffset === 0) {
        document.body.classList.add('disable-scroll');

        setTimeout(function () {
            document.body.classList.remove('disable-scroll');
        }, 7000); // Time is in milliseconds (so 7000 ms is 11 seconds)
    }

};

window.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const fadeElements = document.querySelectorAll('.fade');

    fadeElements.forEach(function(element) {
        const elementRect = element.getBoundingClientRect();
        const elementCenterY = elementRect.top + elementRect.height / 2; // center of the element
        const distanceToCenter = Math.abs(windowHeight / 2 - elementCenterY); // distance from center of viewport

        let opacity;
        if (distanceToCenter <= windowHeight / 2) { // if the center of the element is in the viewport
            opacity = 1 - (distanceToCenter / (windowHeight / 2)) + 0.3; // decrease opacity as it moves away from center
        } else {
            opacity = 0;
        }
        element.style.opacity = opacity;
    });
});

