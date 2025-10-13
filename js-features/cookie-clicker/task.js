
const clickCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let isCookieEnlarged = false;
cookie.addEventListener('click', function() {
	let currentClicks = parseInt(clickCounter.textContent);
	clickCounter.textContent = currentClicks + 1;
	if (isCookieEnlarged) {
		cookie.style.width = '200px';
	} else {
		cookie.style.width = '220px';
	}
	isCookieEnlarged = !isCookieEnlarged;
});