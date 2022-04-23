const inputNameE = document.getElementById('name')
const btnE = document.getElementById('addToDo')
const todoFormE = document.getElementById('todoForm')
const todoList = document.getElementById('todoList')
todoFormE.addEventListener('keyup',changeTodoForm)
btnE.addEventListener('click', onAddButtonClick)

function changeTodoForm(e) {

    e.target.value.length ? btnE.disabled = false : btnE.disabled = true;
}
function onAddButtonClick() {
    const listElementValue = inputNameE.value;
    const listElement = document.createElement('li')
    listElement.textContent = listElementValue;
    todoList.append(listElement)
    clearForm()
}

function clearForm() {
    todoFormE.reset()
    btnE.disabled = true;
}