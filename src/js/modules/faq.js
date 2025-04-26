export default function () {
    let items = document.querySelectorAll('.faq__item')
    let activeItem = document.querySelector('.faq__item.active')
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            if (e.currentTarget !== activeItem && !!activeItem) {
                activeItem.classList.remove('active')
            }
            if (e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.remove('active')
            } else {
                e.currentTarget.classList.add('active')
                activeItem = e.currentTarget
            }
        })
    }




    const faq = document.querySelector('.faq')
    const faqTitle = document.querySelector('.faq__title')

    const faqTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: faq,
			start: "top 70%",
		}
	});
    faqTimeline.from(faqTitle, {
        opacity: 0,
        y: "-100%",
        duration: 0.6,
        ease: "power2.out"
    }).from(items, {
        opacity: 0,
        y:"-50%",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.3");
}