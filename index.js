const slider = document.getElementById("img_slider");

function slideLeft() {
    slider.scrollLeft -= 200;
}

function slideRight() {
    slider.scrollLeft += 200;
}

// Swipe support
let startX = 0;

slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) slideRight();
    if (endX - startX > 50) slideLeft();
});


// Smooth continuous scrolling
setInterval(() => {
    slider.scrollLeft += 2;  // small step for smoothness

    // When reaching the end:
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 5) {

        // Disable smooth scroll → instant reset
        slider.style.scrollBehavior = "auto";
        slider.scrollLeft = 0;

        // Re-enable smooth scroll for normal sliding
        requestAnimationFrame(() => {
            slider.style.scrollBehavior = "smooth";
        });
    }
}, 16); // ~60fps

  function toggleFAQ(id) {
    const ans = document.getElementById(id);
    const icon = ans.parentElement.querySelector('.faq-icon');

    if (ans.style.maxHeight && ans.style.maxHeight !== '0px') {
      ans.style.maxHeight = '0px';
      icon.textContent = '+';
    } else {
      ans.style.maxHeight = ans.scrollHeight + 'px';
      icon.textContent = '–';
    }
  }
  
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  function toggleFAQ(id) {
const answer = document.getElementById(id);
answer.style.display = answer.style.display === "block" ? "none" : "block";
}

document.getElementById("contactForm").addEventListener("submit", function () {
    setTimeout(() => this.reset(), 500);
});