const loader = document.querySelector('.loader');
const landing = document.querySelector('.landing');

function  init() {
    setTimeout(() => {
        loader.style.opaciy = 0;
        loader.style.display = 'none';

        landing.style.display = 'block';
        setTimeout(() => landing.style.opacity = 1, 50);
        
    }, 4000);
}

init();