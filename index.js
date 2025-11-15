const slider = document.getElementById("img_slider");

    function slideLeft() {
      slider.scrollLeft -= 200;
    }

    function slideRight() {
      slider.scrollLeft += 200;
    }

    let startX = 0;

    slider.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", e => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) slideRight();
      if (endX - startX > 50) slideLeft();
    });

    setInterval(() => {
      slider.scrollLeft += 200;
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
        slider.scrollLeft = 0;
      }
    }, 10);

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