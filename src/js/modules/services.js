// import Swiper from "swiper";

export default function () {
    const services = document.querySelector('.services')
    const servicesTitle = document.querySelector('.services__title')
    const servicesItems = document.querySelectorAll('.service')

    const servicesTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: services,
			start: "top 70%",
		}
	});

    servicesTimeline.from(servicesTitle, {
        opacity: 0,
        y: "-100%",
        duration: 0.6,
        ease: "power2.out"
    })

    let servicesSwiper = new Swiper(".services-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        // freeMode: true,
        navigation: {
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev",
        },
        pagination: {
            el: ".services-pagination",
            clickable: true
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            // 1200: {
            //     slidesPerView: 5,
            // },
        }
    })

    
}