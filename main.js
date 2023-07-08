let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('col');
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 33.10;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia('(max-width: 428px)');
if (mob_view.matches) {
	movePer = 100;
	maxMove = 870;
}

let right_mover = () => {
	l = l + movePer;
	if (product == 1) {
		l = 0;
	}
	for (const i of product) {
		if (l > maxMove) {
			l = l - movePer;
		}
		i.style.left = '-' + l + '%';
	}
};
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) {
		l = 0;
	}
	for (const i of product) {
		if (product_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
};
span[1].onclick = () => {
	right_mover();
};
span[0].onclick = () => {
	left_mover();
};