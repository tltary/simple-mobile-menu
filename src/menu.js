const menuButton = document.querySelector('.js-menu-button');
const menuContent = document.querySelector('.js-menu-container');

menuButton.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
        menuContent.classList.remove('active')
    } else {
        this.classList.add('active')
        menuContent.classList.add('active')
    }
}, false)