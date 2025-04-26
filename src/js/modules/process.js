export default function process() {
  let processSlider = new BeerSlider( document.getElementById( "process-slider" ) );


  const process = document.querySelector('.process')
  const processTitle = document.querySelector('.process__title')
  const processSubtitle = document.querySelector('.process__subtitle')
  const processItems = document.querySelectorAll('.stage')

  const processTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: process,
    start: "top 70%",
  }
});
  processTimeline.from(processTitle, {
      opacity: 0,
      y: "-100%",
      duration: 0.6,
      ease: "power2.out"
  }).from(processSubtitle, {
    opacity: 0,
    x: "-100%",
    duration: 0.6,
    ease: "power2.out"
}).from(processItems, {
      opacity: 0,
      y:"-50%",
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
  }, "-=0.3");
}
