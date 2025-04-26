export default function () {
    const promoTimeline = gsap.timeline()
    const promoTitle = document.querySelector('.promo__title')
    const promoSubtitle = document.querySelector('.promo__subtitle')
    const promoBtn = document.querySelector('.promo__btn')
	// const promoBg = document.querySelector('.promo__bg')
	const promoAdvantages = document.querySelector('.promo__advantages')

	promoTimeline
	// .from(promoAdvantages, {
	// 	x: "100%", 
	// 	opacity: 0, 
	// 	duration: 0.2, 
	// 	ease: "power2.out", 
	// 	stagger: 0.2
	// })
	.from(promoTitle, { x: "-100%", opacity: 0, duration: 1, ease: "power2.out"}, "-=0.5")
	.from(promoSubtitle, { x: "-100%", opacity: 0, duration: 1, ease: "power2.out"}, "-=0.5")
	.from(promoBtn, { opacity: 0, duration: 0.1, ease: "power2.in" })
	// .from(promoBg, { opacity: 0, duration: 1 })
	// .from(promoCta, { opacity: 0, duration: 1 })
}