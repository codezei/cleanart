import promo from './modules/promo'
import about from './modules/about'
import parallax from './modules/parallax'
import faq from './modules/faq'
import works from './modules/works'
// import xScroll from './modules/x-scroll'
import header from './modules/header'
import services from './modules/services'
import reviews from './modules/reviews'
import cta from './modules/cta'
import process from './modules/process'
import why from './modules/why'
import 'regenerator-runtime/runtime';
import banner from './modules/banner'

document.addEventListener('DOMContentLoaded', function () {
	promo()
	about()
	parallax()
	faq()
    // xScroll()
	header()
	services()
	reviews()
	cta()
	process()
	banner()
	why()
	
})
works()

