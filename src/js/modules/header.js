export default function header () {
    const header = document.querySelector('.header')
    const burger = document.querySelector('.js-burger')

    burger.addEventListener('click', function (e) {
        document.documentElement.classList.toggle('open-menu')

    })

    header.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            document.documentElement.classList.remove('open-menu')
        }
    })

    let linkNav = document.querySelectorAll('[href^="#"]')
	let headerHeight = header.getBoundingClientRect().height
	let V = 0.2;
	for (let i = 0; i < linkNav.length; i++) {
		linkNav[i].addEventListener('click', function (e) {
			e.preventDefault();
			let w = window.pageYOffset 
			let hash = this.href.replace(/[^#]*(.*)/, '$1');
			let tar = document.querySelector(hash) 
			let t = tar.getBoundingClientRect().top - headerHeight
			let start = null;

			requestAnimationFrame(step); 
			function step(time) {
				if (start === null) {
					start = time;
				}
				var progress = time - start,
					r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
				window.scrollTo(0, r);
				if (r != w + t) {
					requestAnimationFrame(step)
				} else {
					location.hash = hash 
				}
			}
			if (t > 1 || t < -1) {
				requestAnimationFrame(step)
			}
		});

	}
}