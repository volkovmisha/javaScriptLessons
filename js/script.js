const contactCreateNameE = document.getElementById('name'),
    contactCreateSecondNameE = document.getElementById('secondName'),
    contactCreateTelE = document.getElementById('phone'),
    buttonE = document.getElementById('submitCreate'),
    respE = document.getElementById('responce'),
    ContactFormE = document.getElementById('ContactForm'),
    controlE = document.getElementById('control_panel'),
    ContactFormInputsE = document.querySelectorAll('.createInput');

const api = new Api();
renderResponce();
let ContactList;

function renderResponce() {
    api.getContacts().then(r => {
        ContactList = r;
        renderAnswer(ContactList)
    });
}

function renderAnswer(r) {
    if (r.length) {
        respE.classList.add('filled')
        respE.innerHTML = r.map(e => renderContactItem(e)).join('');
    } else {
        respE.classList.remove('filled');
    }
}

function renderContactItem(e) {
    return `<div class="Contact-item finished" key="${e.id}"> 
            <div>
                <p>${e.name}</p>
                <p>${e.lastName}</p>
                <p>${e.phone}</p>
            </div>
             <p class="edit visible" >Edit</p>
             <p class="delete">x</p>
            </div>`;
}

buttonE.addEventListener('click', createContact)
ContactFormE.addEventListener('keyup', changeContactForm)
respE.addEventListener('click', clickContactItem)

function clickContactItem(e) {
   const target = e.target.closest('.Contact-item');
    if(target) {
        const id = target.getAttribute('key');
        if (e.target.classList.contains('delete')) {
            deleteContact(id)
        }
        if (e.target.classList.contains('complete')) {
            completeContact(id);
        }
        if (e.target.classList.contains('edit')) {
            openEditForm(id)
        }
    }
}

function openEditForm(id) {
    const currentContact = ContactList.find(el => el.id === id)
    controlE.innerHTML = ''
    const editedInputName = document.createElement('input'),
        editedInputLastName = document.createElement('input'),
        editedInputPhone  = document.createElement('input'),
        submitEditedContactButton = document.createElement('button');
    editedInputName.value = currentContact.name;
    editedInputName.id = 'editedName';
    editedInputLastName.value = currentContact.lastName;
    editedInputLastName.id = 'editedInputLastName';
    editedInputPhone.value = currentContact.phone;
    editedInputPhone.id = 'editedPhone'
    submitEditedContactButton.setAttribute('key', currentContact.id);
    submitEditedContactButton.innerText = 'edit contact';
    controlE.classList.add('filled')
    controlE.append(editedInputName, editedInputLastName,editedInputPhone, submitEditedContactButton)
}

controlE.addEventListener('click', submitEditContact)

function submitEditContact(e) {
    if (e.target.localName === 'button') {
        const key = e.target.getAttribute('key');
        const Contact = ContactList.find(el => el.id === key)
        Contact.name = document.getElementById('editedName').value
        Contact.lastName = document.getElementById('editedInputLastName').value
        Contact.phone = document.getElementById('editedPhone').value
        api.editContact(Contact).then(r => {
            afterRequestManipulation(r)
            controlE.innerHTML = '';
            controlE.classList.remove('filled');
        })
    }
}

function createContact(e) {
    e.stopPropagation();
    e.preventDefault();
    api.createContact(contactCreateNameE.value, contactCreateSecondNameE.value,contactCreateTelE.value).then(r => {
        afterRequestManipulation(r)
    });
    clearForm();
}

function deleteContact(id) {
    let deleteContact = confirm('u sure want to delete this awesome Contact item?')
    if (deleteContact) {
        api.deleteContact(id).then(r => {
            afterRequestManipulation(r)
        })
    }
}

function afterRequestManipulation(r) {
    if ((r.statusCode && r.statusCode !== 200) || (r.status && r.status !== 200)) {
        renderError(r.statusCode || r.status);
    } else {
        renderResponce();
    }
}

function completeContact(id) {
    let completeContact = confirm('u sure want to complete this item?')
    if (completeContact) {
        const currentContact = ContactList.find(el => el.id === id)
        api.completeContact(currentContact).then(r => {
            afterRequestManipulation(r)
        })
    }
}

function changeContactForm() {
    isFieldsNotEmpty()
}

function clearForm() {
    ContactFormE.reset()
    buttonE.disabled = true;
}

function isFieldsNotEmpty() {
    let isDisabled = false;
    ContactFormInputsE.forEach(i => {
        if (!i.value.length) {
            isDisabled = true;
        }
    })
    isDisabled ? buttonE.disabled = true : buttonE.disabled = false;
}

function renderError(e) {
    const error = ERRORS_LIST[e];
    for (key in error) {
        const errorString = document.createElement('p')
        errorString.innerHTML = `${key} : ${error[key]}`;
        errorString.style.color = 'red';
        respE.prepend(errorString)
        setTimeout(function () {
            errorString.remove();
        }, 5000)
    }
}