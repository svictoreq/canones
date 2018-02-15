'use strict';

window.onload = function () {
	'use strict';

	var elementosNav = document.getElementsByClassName('elemento-nav');
	for (var elemento = 0; elemento < elementosNav.length; elemento++) {
		elementosNav[elemento].onclick = function () {
			for (var i = 0; i < elementosNav.length; i++) {
				if (elementosNav[i].classList.contains('activo')) {
					elementosNav[i].className = 'elemento-nav';
					break;
				}
			}
			this.className = 'elemento-nav activo';
		};
	}
};
//# sourceMappingURL=app.js.map