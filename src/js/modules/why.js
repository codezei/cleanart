export default function why () {
    const why = document.querySelector('.why')
    const whyTitle = document.querySelector('.why__title')
    const whyItems = document.querySelectorAll('.advantages__item')

    const whyTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: why,
			start: "top 70%",
		}
	});
    whyTimeline.from(whyTitle, {
        opacity: 0,
        y: "-100%",
        duration: 0.6,
        ease: "power2.out"
    }).from(whyItems, {
        opacity: 0,
        y:"-50%",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.3");
}