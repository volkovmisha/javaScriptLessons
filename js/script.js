const inputNameE = document.getElementById('name')
const lastNameE = document.getElementById('lastname')
const phoneE = document.getElementById('phone')
const btnE = document.getElementById('addToDo')
const todoFormE = document.getElementById('todoForm')
const todoList = document.getElementById('todoList')
const todoFormInputsE = document.querySelectorAll('input')
const rowTemplateE = document.getElementById('rowTemplate')

todoFormE.addEventListener('keyup',changeTodoForm)
btnE.addEventListener('click', onAddButtonClick)

function changeTodoForm() {
    isFieldsNotEmpty()
}
function onAddButtonClick() {
    const toDoRow = createToDoRow()
    addToDoRow(toDoRow)
    clearForm()
}

function createToDoRow() {
    return rowTemplateE.innerHTML
        .replace("{{name}}",inputNameE.value)
        .replace("{{lastName}}",lastNameE.value)
        .replace("{{phone}}",phoneE.value)
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
        if(!i.value.length) {
            isDisabled = true;
        }
    })
    isDisabled ? btnE.disabled = true : btnE.disabled = false;
}