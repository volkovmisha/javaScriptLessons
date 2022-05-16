const menu = document.getElementById('menu')
window.addEventListener('resize', resize);

const MOBILE_WIDTH = 768;
resize();

function resize() {
    const windowWidth = window.innerWidth
    if(windowWidth > MOBILE_WIDTH) {
        menu.classList.remove('show')
    } else {
        menu.classList.add('show')

    }
}