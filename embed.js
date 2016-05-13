;(function (d) {
	'use strict';

	var asim = {
		div: d.createElement('div'),
		fnt: d.createElement('link'),
		css: d.createElement('link'),
		scr: d.createElement('script'),
		btn: d.createElement('a'),
		brk: d.createElement('br'),
		src: d.createElement('a'),
		ogn: d.getElementsByClassName('arshsim')[0]
	};

	asim.fnt.rel = 'stylesheet';
	asim.fnt.type = 'text/css';
	asim.fnt.href = 'https://fonts.googleapis.com/css?family=Open+Sans';

	asim.css.rel = 'stylesheet';
	asim.css.type = 'text/css';
	asim.css.href = 'https://retraction.github.io/arsh-sim/embed.css';

	asim.scr.src = 'https://retraction.github.io/arsh-sim/scripts/main.js';

	asim.btn.href = '#';
	asim.btn.className = 'btn';
	asim.btn.onclick = function () {
		arshsim();
		return false;
	};
	asim.btn.innerText = 'Play Arshneet Simulator';

	asim.src.href = 'https://github.com/Retraction/arsh-sim';
	asim.src.target = '_blank';
	asim.src.innerText = 'Source';

	asim.div.className = 'arshsim';
	asim.div.appendChild(asim.fnt);
	asim.div.appendChild(asim.css);
	asim.div.appendChild(asim.scr);
	asim.div.appendChild(asim.btn);
	asim.div.appendChild(asim.brk);
	asim.div.appendChild(asim.src);

	asim.ogn.parentNode.replaceChild(asim.div, asim.ogn);
})(document);
