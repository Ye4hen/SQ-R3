//burger
const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.header__nav');
//const close = document.querySelector('.menu__close');
const body = document.body;

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
}



//search
const searchicon1 = document.querySelector("#searchicon1");
const closeicon = document.querySelector(".close-search");
const search1 = document.querySelector("#searchinput1");

searchicon1.addEventListener('click', function () {
	search1.style.display = 'flex';
	closeicon.style.display = 'flex';
});

closeicon.addEventListener('click', function () {
	search1.style.display = 'none';
	closeicon.style.display = 'none';
});
//body.classList.toggle('_lock');



//tabs
const tabNavItems = document.querySelectorAll('.tabs-furniture__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-furniture__button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
});


//Swiper
const swiper = new Swiper('.swiper', {
	spaceBetween: 30,
	slidesPerView: 1,
	//	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		900: {
			slidesPerView: 2
		}
	},
});

AOS.init();

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});