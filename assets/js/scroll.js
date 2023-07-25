// Call the toggleBlueClass function once the page has loaded
window.addEventListener('load', toggleBlueClass);

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

// disabling the scroll when the website refreshes
window.onload = function () {
    if (window.pageYOffset === 0) {
        document.body.classList.add('disable-scroll');

        setTimeout(function () {
            document.body.classList.remove('disable-scroll');
        }, 0); // Time is in milliseconds (so 7000 ms is 11 seconds)
    }

};

// fade animation while scrolling
window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const fadeElements = document.querySelectorAll('.fade');

    fadeElements.forEach(function (element) {
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
    })
});



// Get the elements you want to track
const trackedElements = [
  { el: document.querySelector('.projects'), square: document.querySelector('.square3') },
  { el: document.querySelector('.about-wrap'), square: document.querySelector('.square1') },
  { el: document.querySelector('.edex'), square: document.querySelector('.square2') },
  { el: document.querySelector('.volunteering'), square: document.querySelector('.square4') }
];

// Function to check if the middle of the screen hits the tracked
function isElementInMiddle(element) {
  const elementRect = element.getBoundingClientRect();
  const elementMidY = elementRect.top + elementRect.height / 2;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportMidY = viewportHeight / 2;

  // Specify the range within which the tracked element triggers the square to turn blue
  const range = elementRect.height / 2; // Adjust as needed

  return Math.abs(elementMidY - viewportMidY) < range;
}

// Function to toggle the blue class on the square
function toggleBlueClass() {
  trackedElements.forEach(({ el, square }) => {
    const isInMiddle = isElementInMiddle(el);
    square.classList.toggle('blue', isInMiddle);
  });
}

// Listen for scroll and resize events to check if the element is in the middle
window.addEventListener('scroll', toggleBlueClass);
window.addEventListener('resize', toggleBlueClass);