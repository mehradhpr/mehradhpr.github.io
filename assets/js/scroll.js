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
    })
});

// Function to check if the element is in the middle of the screen
function isElementInMiddle(element) {
    const rect = element.getBoundingClientRect();
    const elementY = rect.top + rect.height / 2;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowY = windowHeight / 2;
    return Math.abs(elementY - windowY) < 1;
  }

// Function to handle the scroll event and apply the blue class to the square
function handleScroll() {
    const targetElement = document.querySelector('.ex-ta-t');
    const square = document.querySelector('.square1');
    if (isElementInMiddle(targetElement)) {
      square.classList.add('blue');
    } else {
      square.classList.remove('blue');
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);