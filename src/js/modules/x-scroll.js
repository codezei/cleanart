export default function () {
    let wrappers = gsap.utils.toArray(".js-scroll-x-wrapper")

    wrappers.forEach((wrapper, i) => {
        let section = wrapper.querySelector('.js-scroll-x-section')
        let localItems = wrapper.querySelectorAll(".js-scroll-x-item")
        let distance = () => {
            let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
                containerBounds = section.getBoundingClientRect();
            return Math.max(0, lastItemBounds.right - containerBounds.right);
        };
        gsap.to(section, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            pinnedContainer: wrapper,
            end: () => "+=" + distance(),
            pin: wrapper,
            scrub: true,
            invalidateOnRefresh: true 
            }
        })
    });

    
}
// .section.js-scroll-x-wrapper 
    // .js-scroll-x-section
    //     .row.flex-nowrap.services__row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-lg-4.row-cols-xl-5
    //         .col.js-scroll-x-item