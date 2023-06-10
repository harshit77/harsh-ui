export const scrollSmoothly = (element, direction, speed, distance, step) => {
  let scrollAmount = 0;

  const sliderTimer = setInterval(() => {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(sliderTimer);
    }
  }, speed);
};
