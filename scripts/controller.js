//This makes the play button work.
window.onload = function () {
	var header = document.getElementsByClassName('page-header')[0],
		play = document.createElement('a'),
		beta = document.createElement('sup');
	play.className = 'btn';
	play.innerHTML = 'Play Game';
	play.onclick = function () {
		arshsim();
		return false;
	};
	beta.innerHTML = 'BETA';
	play.appendChild(beta);
	header.appendChild(play);
};
