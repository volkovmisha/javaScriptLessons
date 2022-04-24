const inputNameE = document.getElementById('name')
const btnE = document.getElementById('addToDo')
const todoFormE = document.getElementById('todoForm')
const todoList = document.getElementById('todoList')
const todoFormInputsE = document.querySelectorAll('input')
let idCounter = 0;
todoFormE.addEventListener('keyup', changeTodoForm)
btnE.addEventListener('click', onAddButtonClick)
todoList.addEventListener('click', clickOnToDoList)

function changeTodoForm() {
    isFieldsNotEmpty()
}

function onAddButtonClick() {
    const toDoRow = createToDoRow()
    addToDoRow(toDoRow)
    clearForm()
}

function createToDoRow() {
    return `<li id="todo-item${idCounter}">
                <div class="row__wrapper">
                    <div>
                            ${inputNameE.value}
                    </div>
                </div>
                <button data-attr="${idCounter++}">x</button>
            </li>`
}

function clickOnToDoList(e) {
    if (e.target.localName === 'button') {
        removeRow(e)
    } else if (e.target.localName !== 'ol') {
        changeRowColor(e)
    }
}

function removeRow(e) {
    document.getElementById('todo-item' + e.target.getAttribute('data-attr')).remove();
}

function changeRowColor(e) {
    e.target.closest('li').classList.toggle('success');
}

function addToDoRow(toDoRow) {
    todoList.innerHTML += toDoRow
}

function clearForm() {
    todoFormE.reset()
    btnE.disabled = true;
}

function isFieldsNotEmpty() {
    let isDisabled = false;
    todoFormInputsE.forEach(i => {
        if (!i.value.length) {
            isDisabled = true;
        }
    })
    isDisabled ? btnE.disabled = true : btnE.disabled = false;
}