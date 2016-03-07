//This makes the play button work.
window.onload = function () {
	var beta = document.createElement('sup'),
		play = document.createElement('a'),
		header = document.getElementsByClassName('page-header')[0];
	beta.innerHTML = 'BETA';
	play.className = 'btn';
	play.innerHTML = 'Play Game';
	play.onclick = function () {
		arshsim();
		return false;
	};
	play.appendChild(beta);
	header.appendChild(play);
};
