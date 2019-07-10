var menu = document.querySelector('.menu-icon'),
    nav = document.querySelector('.navigation-tablet');

menu.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (nav.classList.contains('nav-show')) {
        nav.classList.remove('nav-show');
    } else {
        nav.classList.add('nav-show');
    }

});