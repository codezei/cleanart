export default function () {
  let worksSwiper = new Swiper(".works-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    // freeMode: true,
    navigation: {
        nextEl: ".works-button-next",
        prevEl: ".works-button-prev",
    },
    // pagination: {
    //     el: ".works-pagination",
    //     clickable: true
    // },
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
//     const columns = gsap.utils.toArray(".works__col");
// window.addEventListener("load", () => {
//   const loops = columns.map((column, i) => {
//     const items = gsap.utils.toArray(".work", column);
//     return verticalLoop(items, {
//       repeat: -1,
//       paddingBottom: 10,
//       paused: false
//     });
//   });
//   gsap.set(loops, {
//     time: (i) => (i % 2) + 1,
//     timeScale: 0
//   });
//   gsap.set(columns, { autoAlpha: 1 });
//   Observer.create({
//     target: window,
//     type: "wheel, touch",
//     onUp: () => {
//       gsap
//         .timeline()
//         .to(loops, {
//           timeScale: (i) => (i % 2 > 0 ? 2 : 2.5),
//           overwrite: true,
//           duration: 0.2
//         })
//         .to(
//           loops,
//           {
//             timeScale: 0,
//             ease: "power1.in"
//           },
//           1
//         );
//     },
//     onDown: () => {
//       gsap
//         .timeline()
//         .to(loops, {
//           timeScale: (i) => (i % 2 > 0 ? -2 : -2.5),
//           overwrite: true,
//           duration: 0.2
//         })
//         .to(
//           loops,
//           {
//             timeScale: 0,
//             ease: "power1.in"
//           },
//           1
//         );
//     }
//   });
// });

/*
      This helper function makes a group of elements animate along the y-axis in a seamless, responsive loop.
    
      Features:
        - Uses yPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
        - When each item animates up or down enough, it will loop back to the other side
        - Optionally pass in a config object with values like draggable: true, center: true, speed (default: 1, which travels at roughly 100 pixels per second), paused (boolean), repeat, reversed, enterAnimation, leaveAnimation, and paddingBottom.
        - The returned timeline will have the following methods added to it:
        - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
        - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
        - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
        - current() - returns the current index (if an animation is in-progress, it reflects the final index)
        - times - an Array of the times on the timeline where each element hits the "starting" spot.
        - elements - an Array of the elements that are being controlled by the timeline
    */
}