class Tab {
    #children = []
    static CLASSES = {
        title: 'tab-title',
        body: 'tab-body'
    }
    constructor(element) {
        this.element = element
        this.#children = [...element.children]
        this.addchildrenClasses()
        this.element.addEventListener('click', this.changeTab)
        this.element.addEventListener('mouseover', this.hoverTab)
        this.element.addEventListener('mouseout', this.unHoverTab)
    }

    addchildrenClasses() {
        this.#children.forEach(e => {
            const [title, body] = e.children
            title.classList.add(Tab.CLASSES.title)
            body.classList.add(Tab.CLASSES.body)
        })
    }
    changeTab(e) {
        const prevClicks = document.querySelectorAll('.selected')
        prevClicks.length ? prevClicks[0].classList.remove('selected') : '';
        e.target.classList.add('selected')
    }
    hoverTab(e) {
        e.target.classList.add('hover')
    }
    unHoverTab(e) {
        e.target.classList.remove('hover')
    }
}

const targetElement = document.querySelector('.tabs')
const tab = new Tab(targetElement)