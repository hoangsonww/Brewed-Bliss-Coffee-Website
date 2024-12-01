/**
 * Mobile navigation - I am making my own JavaScript for mobile navigation.
 * This function will toggle the height of the mobile navigation links section when
 * the hamburger icon is clicked, with the help of CSS animations for smooth transition.
 */
document.getElementById( 'menu-icon' ).addEventListener( 'click', function () {
	// Get the mobile navigation links and the icon from the HTML DOM
	const navLinks = document.getElementById('mobile-nav-links');
	const icon = document.getElementById('menu-icon').querySelector('i');

	// If the height of the mobile navigation links is 0px or not set, then set it to the scroll height of the links
	if ( navLinks.style.height === '0px' || !navLinks.style.height ) {
		// Set the height of the mobile navigation links to the scroll height of the links to push other elements down
		// without covering them
		navLinks.style.height = navLinks.scrollHeight + 'px';
		// Change the icon from hamburger to close icon
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-times', 'icon-toggle');
	} else {
		// If the height of the mobile navigation links is not 0px, then set it to 0px to close the links
		navLinks.style.height = '0px';
		// Change the icon from close to hamburger icon
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars', 'icon-toggle'); 
	}
});
