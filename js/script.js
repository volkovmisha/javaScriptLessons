class Tab {
    children = []
    static CLASSES = {
        title: 'tab-title',
        body: 'tab-body'
    }
    constructor(element) {
        this.children = [...element.children]
        this.addChildrenClasses()
        this.children.forEach(e => console.log(e))
    }

    addChildrenClasses() {
        this.children.forEach(e => {
            const [title, body] = e.children
            title.classList.add(Tab.CLASSES.title)
            body.classList.add(Tab.CLASSES.body)
            /* кстати насколько легально вообще задавать слушатели напрямую, вот так? */
            title.addEventListener('click', this.changeTab)
            title.addEventListener('mouseover', this.hoverTab)
            title.addEventListener('mouseout', this.unHoverTab)
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