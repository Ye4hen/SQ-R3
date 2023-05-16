const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.header__nav');
const closeburger = document.querySelector(".menu__close");
const logo = document.querySelector(".header__logo");
const body = document.body;

burger.addEventListener('click', function () {
	menu.style.display = 'grid';
	closeburger.style.display = 'flex';
	burger.style.display = 'none';
	logo.style.opacity = '0';
});

closeburger.addEventListener('click', function () {
	menu.style.display = 'none';
	closeburger.style.display = 'none';
	burger.style.display = 'block';
	logo.style.opacity = '1';
})