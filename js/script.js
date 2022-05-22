const MOBILE_WIDTH = 768;

class Menu {
    elementId;
    constructor(elementId) {
        this.elementId = elementId
        this.createMenu(elementId)
        this.init()
        this.initLinksInteraction()
        this.resize()
    }

    init() {
        window.addEventListener('resize', this.resize);
        this.menuHolder.addEventListener('click', this.clickOnMenu);

    }
    initLinksInteraction() {
        this.nav = this.menuHolder.previousElementSibling;
        this.nav.addEventListener('mouseover',this.colorize)
        this.nav.addEventListener('mouseout',this.returnDefaultColor)
        this.nav.addEventListener('click',this.closeMenu)
    }

    createMenu(elementId) {
        this.header = document.getElementById(elementId)
        this.menuHolder = document.createElement('div')
        this.menuHolder.id = 'menu';
        this.menuHolder.classList.add('menu')
        this.menuHolder.innerHTML = '<span class="menu-top"></span>\n' +
            '                <span class="menu-middle"></span>\n' +
            '                <span class="menu-bottom"></span>\n'
        this.header.append(this.menuHolder)
    }

    resize = () => {
        const windowWidth = window.innerWidth
        if (windowWidth > MOBILE_WIDTH) {
            this.menuHolder.classList.remove('show')
            this.menuHolder.classList.remove('active')
            this.nav.style.display = 'flex'
            this.nav.classList.remove('dropdown')

        } else {
            this.menuHolder.classList.add('show')
            this.nav.style.display = 'none'
        }
    }

    clickOnMenu = () => {
        this.menuHolder.classList.toggle('active')
        this.nav.classList.toggle('dropdown');
    }

    colorize (e) {
        e.target.style.color = '#e1e1e1';
    }
    returnDefaultColor (e) {
        e.target.style.color = ''
    }

    closeMenu = (e) => {
        if(e.target.localName === 'a') {
            this.menuHolder.classList.remove('active')
            this.nav.classList.remove('dropdown')
        }
    }

}

const menu = new Menu('header');
