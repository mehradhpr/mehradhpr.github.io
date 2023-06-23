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
        }, 0); // Time is in milliseconds (so 7000 ms is 11 seconds)
    }

};

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

// Get the element you want to track
const trackedElement = document.querySelector('.ex-ta-t');

// Get the audio element for the click sound
const clickSound = document.getElementById('clickSound');

// Function to check if the tracked element is in the middle of the screen
function isElementInMiddle() {
  const elementRect = trackedElement.getBoundingClientRect();
  const elementMidY = elementRect.top + elementRect.height / 2;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportMidY = viewportHeight / 2;

  return Math.abs(elementMidY - viewportMidY) < elementRect.height / 2 + 50;
}

// Function to toggle the blue class on the square
function toggleBlueClass() {
  const square = document.querySelector('.square1');
  square.classList.toggle('blue', isElementInMiddle());

  // Play the click sound
  clickSound.currentTime = 0; // Reset the audio playback to the beginning
  clickSound.play();
}

// Listen for scroll and resize events to check if the element is in the middle
window.addEventListener('scroll', toggleBlueClass);
window.addEventListener('resize', toggleBlueClass);