console.log("welcome")
const menuBtn = document.querySelector('#menu-btn');
const closeAside = document.querySelector('#close-btn');
const asideMenu = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    asideMenu.style.display = 'block';
})

closeAside.addEventListener('click', () => {
    asideMenu.style.display = 'none';
})