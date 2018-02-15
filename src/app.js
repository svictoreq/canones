window.onload = function () {
	'use strict';

	const elementosNav = document.getElementsByClassName('elemento-nav');
	for (let elemento = 0; elemento < elementosNav.length; elemento++) {
		elementosNav[elemento].onclick = function () {
			for (let i = 0; i < elementosNav.length; i++) {
				if (elementosNav[i].classList.contains('activo')) {
					elementosNav[i].className = 'elemento-nav';
					break;
				}
			}
			this.className = 'elemento-nav activo';
		};
	}
};
