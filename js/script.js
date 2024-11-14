document.getElementById('menu-icon').addEventListener('click', function() {
	const navLinks = document.getElementById('mobile-nav-links');
	const icon = document.getElementById('menu-icon').querySelector('i');

	if (navLinks.style.height === '0px' || !navLinks.style.height) {
		navLinks.style.height = navLinks.scrollHeight + 'px';
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-times', 'icon-toggle');
	} else {
		navLinks.style.height = '0px';
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars', 'icon-toggle'); 
	}
});
	