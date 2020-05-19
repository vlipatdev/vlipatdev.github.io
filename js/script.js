window.onload = () => {
	document.querySelector('.loader').style.display = 'none';
	document.querySelector('.header-icon').style.animation =
		'slide-down 5s ease-in infinite 8s';
	document.body.style.overflowY = 'auto';
};

const actArr = [
	'.nav-button',
	'.nav-button-bar-1',
	'.nav-button-bar-2',
	'.filter',
	'.sidebar'
];

const active = () => {
	actArr.forEach((el) =>
		document.querySelector(el).classList.toggle(`${el.slice(1)}-active`)
	);
	document.body.classList.toggle('body-noscroll');
};

document.querySelector('.nav-button').addEventListener('click', active);
document.querySelector('.filter').addEventListener('click', active);
document
	.querySelectorAll('.sidebar-link')
	.forEach((el) => el.addEventListener('click', active));

document.querySelector(
	'.footer-text'
).textContent = `Copyright ${new Date().getFullYear()} Val Lipat. Illustrations by Katerina Limpitsouni.
`;
