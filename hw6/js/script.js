const menuActive = document.querySelector('.dropdown');
const headerMenu = document.querySelector('.dropdown_menu');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
    console.log(menuActive);
}

headerMenu.addEventListener('click', toggleMenu);