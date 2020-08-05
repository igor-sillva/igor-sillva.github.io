!((window) => {

/**
 * Materialize
 */
const sidenavElems = document.querySelectorAll('.sidenav');
const sidenavInstances = M.Sidenav.init(sidenavElems, {});

// const parallaxElems = document.querySelectorAll('.parallax');
// const parallaxInstances = M.Parallax.init(parallaxElems, {});

const carouselElems = document.querySelectorAll('.carousel');
const carouselSettings = {
  numVisible: 5,
  fullWidth: true,
  noWrap: false,
  indicators: true
}
const carouselInstances = M.Carousel.init(carouselElems, carouselSettings);

/**
 * Lotties Animations
 */
const programmerAnimation = document.querySelector('.programmer-animation');
lottie.loadAnimation({
  container: programmerAnimation, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/lotties/17343-programming.json' // the path to the animation json
});

const underConstructionAnimation = document.querySelector('.construction-animation');
lottie.loadAnimation({
  container: underConstructionAnimation, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/lotties/27330-construction-in-process-by-kit8net.json' // the path to the animation json
});

})(window)